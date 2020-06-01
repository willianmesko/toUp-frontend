import React, { useState, useRef, useEffect } from 'react';
import { useTraining } from '~/hooks/TrainingContext';
import { Container, RoutinesArea, Routine, ExerciceArea } from './styles';
import ModalContainer from '~/components/ModalContainer';
import Input from '~/components/Inputs/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Button from '~/components/Button';
import { FiUser, FiEdit3, FiSave } from 'react-icons/fi';
import { GrNotes } from 'react-icons/gr';
import Tour from 'reactour';
import * as Yup from 'yup';
import { useToast } from '~/hooks/ToastContext';
import getValidationErrors from '~/utils/getValidationErrors';
import api from '~/services/api';
import Table from 'react-bootstrap/Table';
import Chip from '@material-ui/core/Chip';
import ReactTooltip from 'react-tooltip';

import CreateExercice from './CreateExercice';

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
  const [exercices, setExercices] = useState();
  const [trainin, setTraining] = useState<TrainingInterface>(
    {} as TrainingInterface,
  );

  const [openModal, setOpenModal] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [startStep, setStartStep] = useState(0);
  const [playVideo, setPlayVideo] = useState(0);
  const [exerciceDragged, setExerciceDragged] = useState('');
  const [editRoutine, setEditRoutine] = useState(false);
  const [editedRoutine, setEditedRoutine] = useState([]);
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function getTraining(): Promise<void> {
      const exercicesData = await api.get('/exercices');
      const routinesData = await api.get(`/routines/${training.id}`);

      setExercices(exercicesData.data);

      setIsTourOpen(routinesData.data.length === 0 ? true : false);

      setRoutines(routinesData.data);
    }
    getTraining();
  }, [training]);

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
    setEditRoutine(false);
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
        description: Yup.string(),
      });

      await schema.validate(
        {
          title,
          description,
        },
        {
          abortEarly: false,
        },
      );

      const response = await api.post('/routines', {
        title,
        description,
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
      <ModalContainer
        setCloseModal={setOpenModal}
        opened={openModal}
        execute={setIsTourOpen}
        buttonLabel={'Criar rotina'}
        title={'Rotina de exercícios'}
      >
        <Form ref={formRef} onSubmit={handleSubmitRoutine}>
          <Input name="title" icon={FiUser} placeholder="Titulo" />

          <Input name="description" icon={GrNotes} placeholder="Observações" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </ModalContainer>
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
              <a
                data-tut={`reactour__add_exercice${index}`}
                data-tip
                data-for={`tooltip${index}`}
              >
                <Chip
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
              </a>
              <ReactTooltip
                delayShow={2000}
                id={`tooltip${index}`}
                type="error"
              >
                <span>{exercice.name}</span>
              </ReactTooltip>
            </>
          ))}

        <span>
          <CreateExercice exercices={exercices} addExercice={setExercices} />
        </span>
      </ExerciceArea>

      <RoutinesArea>
        {routines &&
          routines.map(routine => {
            return (
              <Routine
                onDrop={e => dropRoutine(e, routine.id)}
                onDragOver={dragOver}
              >
                <div className="routine-title">
                  <p></p>
                  <strong>{routine.title}</strong>
                  {editRoutine ? (
                    <FiSave onClick={() => handleEditRoutine()} />
                  ) : (
                    <FiEdit3 onClick={() => setEditRoutine(true)} />
                  )}
                </div>
                <Table bordered striped hover responsive size="sm">
                  <thead>
                    <tr>
                      <th id="exercice">Exercicio</th>
                      <th id="series">Séries</th>
                      <th id="series">Reps</th>
                      <th id="series">Carga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routine.routineExercice &&
                      routine.routineExercice.map(exercice => {
                        return (
                          <tr
                            draggable={true}
                            onDrag={e => dragStart(e, exercice.id)}
                            onDrop={e => dropExercice(e, exercice.volume)}
                            onDragOver={dragOver}
                          >
                            <td>{exerciceName(exercice.exercice_id)}</td>
                            {editRoutine ? (
                              <>
                                <td>
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
                                </td>
                                <td>
                                  <input
                                    onChange={e => {
                                      editRoutineExercice(
                                        e,
                                        routine.id,
                                        exercice.id,
                                        'repetitions',
                                      );
                                    }}
                                    value={exercice.repetitions}
                                  />
                                </td>
                                <td>
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
                                  />
                                </td>
                              </>
                            ) : (
                              <>
                                <td>{exercice.sequence}</td>
                                <td>{exercice.repetitions}</td>
                                <td>{exercice.volume}</td>
                              </>
                            )}
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
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
            );
          })}
      </RoutinesArea>
      {/* );
      })} */}
    </Container>
  );
};

export default TrainingInfo;
