import React, { useState, useRef, useEffect } from 'react';
import { useTraining } from '~/hooks/TrainingContext';
import { Container, RoutinesArea, Routine, ExerciceArea, View } from './styles';
import ModalContainer from '~/components/ModalContainer';
import Input from '~/components/Inputs/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '~/components/Button';
import { FiUser, FiEdit3, FiSave } from 'react-icons/fi';
import { FaThList } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
import { BsGrid1X2Fill } from 'react-icons/bs';
import { MdArrowBack, MdDescription } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import Tour from 'reactour';
import * as Yup from 'yup';
import { useToast } from '~/hooks/ToastContext';
import getValidationErrors from '~/utils/getValidationErrors';
import api from '~/services/api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import AddAthletes from './AddAthletes';
import TableRow from '@material-ui/core/TableRow';
import ReactCardFlip from 'react-card-flip';
import Chip from '@material-ui/core/Chip';
import ReactTooltip from 'react-tooltip';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CreateExercice from './CreateExercice';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

interface RoutineInterface {
  title: string;
  description: string;
}

interface TrainingInterface {
  id: string;
  title: string;
  description: string;
  routines: RoutineInterface[];
}
interface RoutineFormData {
  title: string;
  description: string;
}
interface ExerciceInterface {
  id: string;
  name: string;
  group_muscle_id: number;
  group_muscle_name: string;
  youtube_video_id?: string;
}

const TrainingInfo: React.FC = () => {
  const { training } = useTraining();
  const [routines, setRoutines] = useState([]);
  const [exercices, setExercices] = useState([]);
  const [trainin, setTraining] = useState<TrainingInterface>(
    {} as TrainingInterface,
  );
  const [flipped, setFlipped] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [startStep, setStartStep] = useState(0);
  const [playVideo, setPlayVideo] = useState(0);
  const [exerciceDragged, setExerciceDragged] = useState('');
  const [editRoutine, setEditRoutine] = useState({
    routineIndex: 0,
    active: false,
  });
  const [editedRoutine, setEditedRoutine] = useState([]);
  const [addExerciceToRotine, setAddExerciceToRotine] = useState({
    routineIndex: 0,
    active: false,
  });
  const [newExerciceInRoutine, setNewExerciceInRoutine] = useState({
    id: {},
    volume: '',
    repetitions: '',
    sequence: '',
  });
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const [showRoutine, setShowRoutine] = useState<number[]>([
    1,
    2,
    3,
    4,
    5,
    6,
  ] as number[]);
  const [flippedExercice, setFlippedExercice] = useState({
    name: '',
    routine_name: '',
  });
  const [activeView, setActiveView] = useState('grid');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //Onloadig
  const steps = [
    {
      selector: '[data-tut="reactour__create_routine"]',
      content: 'Adicione uma rotina ao treino que criou',
    },
    {
      selector: '[data-tut="reactour__add_exercice0"]',
      content: 'Adicione exercicios na rotina',
    },
    {
      selector: '[data-tut="reacttour_add_exercice_to"]',
      content: 'Selecione o exercicio e arraste até a rotina escolhida',
    },
  ];

  useEffect(() => {
    async function getTraining(): Promise<void> {
      const routinesData = await api.get(`/routines/${training.id}`);
      const exercicesData = await api.get('/exercices');

      setExercices(exercicesData.data);

      setIsTourOpen(routinesData.data.length === 0 ? true : false);

      setRoutines(routinesData.data);
    }
    getTraining();
  }, []);

  const exerciceName = id => {
    const exercice = exercices.find(exercice => exercice.id === id);

    return exercice.name;
  };

  const dragStart = (e, id) => {
    const { target } = e;
    setExerciceDragged(id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragEnd = async (e, id) => {
    const { target } = e;

    setTimeout(() => {
      target.style.display = 'flex';
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  //Change order exercice
  const dropExercice = async (e, id) => {
    console.log(id);
  };
  //Add exerice to routine
  const dropRoutine = async (e, id) => {
    e.preventDefault();

    try {
      const editRoutine = [...routines];
      const index = editRoutine.findIndex(r => r.id === id);

      if (editRoutine[index].routineExercice.length >= 10) {
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Limite de 10 exercícios por rotina',
        });
        return;
      }

      //Verifica se exercício já existe na rotina

      const exerciceIndex = editRoutine[index].routineExercice.findIndex(
        exercice => exercice.exercice_id === exerciceDragged,
      );

      if (exerciceIndex >= 0) {
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Exercício já vinculado a esta rotina',
        });

        return;
      }
      var maior = editRoutine[index].routineExercice.reduce(
        (a, b) => b.volume,
        0,
      );

      const response = await api.post('/routine_exercice', {
        exercice_id: exerciceDragged,
        routine_id: id,
        volume: 10,
        repetitions: 10,
        sequence: 4,
      });

      editRoutine[index].routineExercice.push(response.data);

      setRoutines(editRoutine);
    } catch (error) {}
  };

  const getLetterTraining = index => {
    const letter = ['A', 'B', 'C', 'D', 'E', 'F'];

    return letter[index];
  };

  async function editRoutineExercice(e, routine_id, id, editField) {
    const editR = [...editedRoutine];
    const edit = [...routines];
    const routineIndex = edit.findIndex(r => r.id === routine_id);
    const routineExerciceIndex = edit[routineIndex].routineExercice.findIndex(
      ri => ri.id === id,
    );
    edit[routineIndex].routineExercice[routineExerciceIndex][
      editField
    ] = Number(e.target.value);

    const ed = editR.findIndex(f => f.id === id);

    if (ed >= 0) {
      editR[ed] = edit[routineIndex].routineExercice[routineExerciceIndex];
    } else {
      editR.push(edit[routineIndex].routineExercice[routineExerciceIndex]);
    }
    setEditedRoutine(editR);
  }

  async function handleEditRoutine() {
    await api.put('/routine_exercice', editedRoutine);
    setEditRoutine({ routineIndex: 0, active: false });
  }

  //cria exercicio e adiciona na rotina
  async function handleAddExerciceInRoutine(routine_id) {
    try {
      const findRoutine = [...routines];
      const index = findRoutine.findIndex(r => r.id === routine_id);

      if (findRoutine[index].routineExercice.length >= 10) {
        setAddExerciceToRotine({ routineIndex: 0, active: false });
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Limite de 10 exercícios por rotina',
        });
        return;
      }

      //Verifica se exercício já existe na rotina

      const exerciceIndex = findRoutine[index].routineExercice.findIndex(
        exercice => exercice.exercice_id === newExerciceInRoutine.id,
      );

      if (exerciceIndex >= 0) {
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Exercício já vinculado a esta rotina',
        });
        setAddExerciceToRotine({ routineIndex: 0, active: false });
        return;
      }
      const routineExerciceResponse = await api.post('/routine_exercice', {
        exercice_id: newExerciceInRoutine.id,
        routine_id,
        volume: newExerciceInRoutine.volume,
        repetitions: newExerciceInRoutine.repetitions,
        sequence: newExerciceInRoutine.sequence,
      });

      if (routineExerciceResponse.data.id) {
        findRoutine[index].routineExercice.push(routineExerciceResponse.data);

        setAddExerciceToRotine({ routineIndex: 0, active: false });
        setRoutines(findRoutine);
      }
    } catch (error) {}
  }

  async function handleSubmitRoutine({ title, description }: RoutineFormData) {
    try {
      formRef.current?.setErrors({});
      if (routines.length >= 6) {
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'No máximo 6 rotinas por treino',
        });
        setOpenModal(false);
        return;
      }
      const schema = Yup.object().shape({
        title: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(
        {
          title,
        },
        {
          abortEarly: false,
        },
      );

      const response = await api.post('/routines', {
        title,

        training_id: training.id,
      });

      response.data.routineExercice = [];
      setRoutines(state => [...state, response.data]);
      setOpenModal(false);

      setStartStep(1);
      setIsTourOpen(routines.length === 0 ? true : false);

      addToast({
        type: 'success',
        title: 'Cadastro realizado! 🏋 ',
        description: 'Aluno cadastrado com sucesso!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
      });
    }
  }

  return (
    <Container>
      <div className="icons-action">
        <AddAthletes training_id={training.id} />
        <ModalContainer
          setCloseModal={setOpenModal}
          opened={openModal}
          execute={setIsTourOpen}
          buttonLabel={'Nova rotina'}
          title={'Rotina de exercícios'}
        >
          <Form ref={formRef} onSubmit={handleSubmitRoutine}>
            <Input name="title" icon={FiUser} placeholder="Titulo" />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </ModalContainer>

        <GrCircleInformation
          onClick={() => setIsTourOpen(true)}
          fontSize={20}
        />
      </div>

      <Tour
        startAt={startStep}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />

      <ExerciceArea data-tut="reactour__add_exercice">
        {exercices &&
          exercices.map((exercice, index) => (
            <>
              <Chip
                data-tut={`reactour__add_exercice${index}`}
                data-tip
                data-for={`tooltip${index}`}
                onMouseEnter={() => setPlayVideo(1)}
                onMouseLeave={() => setPlayVideo(0)}
                style={{ display: 'flex' }}
                draggable={true}
                onDragEnd={e => dragEnd(e, exercice.id)}
                onDragOver={e => dragOver(e)}
                onDrag={e => dragStart(e, exercice.id)}
                clickable
                color="primary"
                variant="outlined"
                label={exercice.name}
              />

              <ReactTooltip
                delayShow={2000}
                id={`tooltip${index}`}
                clickable={true}
              >
                <iframe
                  width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                />
              </ReactTooltip>
            </>
          ))}

        <span>
          <CreateExercice exercices={exercices} addExercice={setExercices} />
        </span>
      </ExerciceArea>

      <RoutinesArea>
        <View>
          <li
            className={activeView === 'grid' ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveView('grid')}
          >
            <FaThList /> Visualização em grade
          </li>
          <li
            className={activeView === 'list' ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveView('list')}
          >
            <BsGrid1X2Fill /> Visualização em lista
          </li>
        </View>
        {routines &&
          routines.map((routine, index) => {
            return (
              <ReactCardFlip
                isFlipped={flipped.find(flippp => flippp === index)}
                flipDirection="horizontal"
              >
                <DragDropContext onDragEnd={value => {}}>
                  <Routine
                    show={
                      showRoutine.find(show => show === index + 1)
                        ? 'flex'
                        : 'none'
                    }
                    width={activeView === 'list' ? '800px' : '400px'}
                  >
                    <div className="routine-title">
                      <p>{getLetterTraining(index)}</p>
                      <strong>{routine.title}</strong>
                      <span>
                        {!showRoutine.find(show => show === index + 1) ? (
                          <ArrowDropDownIcon
                            onClick={() =>
                              setShowRoutine(state => [...state, index + 1])
                            }
                          />
                        ) : (
                          <ArrowDropUpIcon
                            onClick={() =>
                              setShowRoutine(state =>
                                state.filter(s => s !== index + 1),
                              )
                            }
                          />
                        )}
                        {(editRoutine.routineIndex === index &&
                          editRoutine.active) ||
                        (addExerciceToRotine.routineIndex === index &&
                          addExerciceToRotine.active) ? (
                          <FiSave
                            onClick={() =>
                              editRoutine.active
                                ? handleEditRoutine()
                                : handleAddExerciceInRoutine(routine.id)
                            }
                          />
                        ) : (
                          <FiEdit3
                            onClick={() =>
                              setEditRoutine({
                                routineIndex: index,
                                active: true,
                              })
                            }
                          />
                        )}
                      </span>
                    </div>

                    <>
                      <TableContainer
                        onDrop={e => dropRoutine(e, routine.id)}
                        onDragOver={dragOver}
                        className="table-container"
                      >
                        <Droppable droppableId={routine.id}>
                          {provided => (
                            <Table
                              size="small"
                              stickyHeader
                              aria-label="sticky table"
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {provided.placeholder}
                              <TableHead>
                                <TableRow>
                                  <TableCell id="exercice">Exercicio</TableCell>
                                  <TableCell size="small" id="series">
                                    Séries
                                  </TableCell>
                                  <TableCell size="small" id="series">
                                    Reps
                                  </TableCell>
                                  <TableCell size="small" id="volume">
                                    Carga
                                  </TableCell>
                                </TableRow>
                              </TableHead>

                              <TableBody>
                                {addExerciceToRotine.routineIndex === index &&
                                  addExerciceToRotine.active && (
                                    <TableRow>
                                      <TableCell>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          onChange={(e, newValue) => {
                                            setNewExerciceInRoutine({
                                              id: newValue.id,
                                              volume:
                                                newExerciceInRoutine.volume,
                                              sequence:
                                                newExerciceInRoutine.sequence,
                                              repetitions:
                                                newExerciceInRoutine.repetitions,
                                            });
                                          }}
                                          options={exercices}
                                          getOptionLabel={option => option.name}
                                          renderInput={params => (
                                            <TextField {...params} />
                                          )}
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <input
                                          onChange={e => {
                                            setNewExerciceInRoutine({
                                              id: newExerciceInRoutine.id,
                                              volume:
                                                newExerciceInRoutine.volume,
                                              sequence: e.target.value,
                                              repetitions:
                                                newExerciceInRoutine.repetitions,
                                            });
                                          }}
                                          value={newExerciceInRoutine.sequence}
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <input
                                          onChange={e => {
                                            setNewExerciceInRoutine({
                                              id: newExerciceInRoutine.id,
                                              volume:
                                                newExerciceInRoutine.volume,
                                              sequence:
                                                newExerciceInRoutine.sequence,
                                              repetitions: e.target.value,
                                            });
                                          }}
                                          value={
                                            newExerciceInRoutine.repetitions
                                          }
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <input
                                          onChange={e => {
                                            setNewExerciceInRoutine({
                                              id: newExerciceInRoutine.id,
                                              volume: e.target.value,
                                              sequence:
                                                newExerciceInRoutine.sequence,
                                              repetitions:
                                                newExerciceInRoutine.repetitions,
                                            });
                                          }}
                                          value={newExerciceInRoutine.volume}
                                        />
                                      </TableCell>
                                    </TableRow>
                                  )}

                                {routine.routineExercice &&
                                  routine.routineExercice.map(
                                    (exercice, indexExercice) => {
                                      return (
                                        <Draggable
                                          draggableId={exercice.id}
                                          index={indexExercice}
                                        >
                                          {provide => (
                                            <TableRow
                                              ref={provide.innerRef}
                                              {...provide.draggableProps}
                                              {...provide.dragHandleProps}
                                            >
                                              <TableCell>
                                                <div>
                                                  <span>
                                                    {exerciceName(
                                                      exercice.exercice_id,
                                                    )}
                                                  </span>
                                                  <span>
                                                    <AiOutlineEye
                                                      onClick={() => {
                                                        setFlipped(state => [
                                                          ...state,
                                                          index,
                                                        ]);
                                                        setFlippedExercice({
                                                          name: exerciceName(
                                                            exercice.exercice_id,
                                                          ),
                                                          routine_name:
                                                            routine.title,
                                                        });
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                              </TableCell>
                                              {editRoutine.routineIndex ===
                                                index && editRoutine.active ? (
                                                <>
                                                  <TableCell>
                                                    <input
                                                      onChange={e => {
                                                        editRoutineExercice(
                                                          e,
                                                          routine.id,
                                                          exercice.id,
                                                          'sequence',
                                                        );
                                                      }}
                                                      value={exercice.sequence}
                                                    />
                                                  </TableCell>
                                                  <TableCell>
                                                    <input
                                                      onChange={e => {
                                                        editRoutineExercice(
                                                          e,
                                                          routine.id,
                                                          exercice.id,
                                                          'repetitions',
                                                        );
                                                      }}
                                                      value={
                                                        exercice.repetitions
                                                      }
                                                    />
                                                  </TableCell>
                                                  <TableCell>
                                                    <input
                                                      onChange={e => {
                                                        editRoutineExercice(
                                                          e,
                                                          routine.id,
                                                          exercice.id,
                                                          'volume',
                                                        );
                                                      }}
                                                      value={exercice.volume}
                                                    />{' '}
                                                    kg
                                                  </TableCell>
                                                </>
                                              ) : (
                                                <>
                                                  <TableCell>
                                                    {exercice.sequence}
                                                  </TableCell>
                                                  <TableCell>
                                                    {exercice.repetitions}
                                                  </TableCell>
                                                  <TableCell>
                                                    {exercice.volume} kg
                                                  </TableCell>
                                                </>
                                              )}
                                            </TableRow>
                                          )}
                                        </Draggable>
                                      );
                                    },
                                  )}
                              </TableBody>
                            </Table>
                          )}
                        </Droppable>
                      </TableContainer>

                      <div
                        onClick={() =>
                          setAddExerciceToRotine({
                            routineIndex: index,
                            active: true,
                          })
                        }
                        className="add_exercice"
                      >
                        <p>Adicionar exercicio</p>
                      </div>
                    </>

                    <div className="routine-footer">
                      <div>
                        <small>Duração total</small>
                        <small>Gasto Calórico</small>
                      </div>
                      <div>
                        <small>Volume total</small>
                        <small>Intensidade total</small>
                      </div>
                    </div>
                  </Routine>
                </DragDropContext>
                <Routine width={activeView === 'list' ? '800px' : '400px'}>
                  <div className="routine-title">
                    <span
                      onClick={() =>
                        setFlipped(state =>
                          state.filter(flipp => flipp !== index),
                        )
                      }
                    >
                      <MdArrowBack />
                    </span>
                    <span>
                      {flippedExercice.routine_name} `{'>'}`{' '}
                      {flippedExercice.name}
                    </span>
                    <span></span>
                  </div>
                  <div className="routine_flipped">
                    <div className="exercice-video-view">
                      <iframe
                        id="player"
                        height="250"
                        src="http://www.youtube.com/embed/4m72jsC_5Ro"
                        frameBorder="0"
                      ></iframe>
                    </div>
                    <div className="exercice-info-view">
                      <h4>Execução</h4>
                      <table>
                        <thead>
                          <tr>
                            <td>Séries</td>
                            <td>Repetições</td>
                            <td>Carga</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>3</td>
                            <td>20</td>
                            <td>50kg</td>
                          </tr>
                        </tbody>
                      </table>
                      <h4>Observações</h4>
                      <Form
                        initialData={{ note: 'Executar após supino' }}
                        ref={formRef}
                        onSubmit={() => {}}
                      >
                        <Input
                          id="note"
                          placeholder="Observações"
                          icon={MdDescription}
                          name="note"
                        />
                      </Form>
                    </div>
                  </div>
                </Routine>
              </ReactCardFlip>
            );
          })}
      </RoutinesArea>
      {/* );
      })} */}
    </Container>
  );
};

export default TrainingInfo;
