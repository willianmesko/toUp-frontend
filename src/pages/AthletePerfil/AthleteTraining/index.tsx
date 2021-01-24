import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import { useAthlete } from '~/hooks/AthleteContext';
import { Content, TrainingContainer } from '../styles';
import AddTraining from './AddTraining';
import ViewRoutine from './ViewRoutine';
import hipertrofia from '~/assets/icons/hipertrofia.svg';
import emagrecimento from '~/assets/icons/emagrecimento.svg';
import api from '~/services/api';
import { useTraining } from '~/hooks/TrainingContext';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

interface RoutineExerciceInterface {
  exercice_id: string;
  routine_id: string;
  sequence: number;
  repetitions: number;
  volume: number;
}

interface RoutineInterface {
  id: string;
  title: string;
  description: string;
  routineExercice?: RoutineExerciceInterface[];
}

interface TrainingInterface {
  id: string;
  title: string;
  description?: string;
  objective: number;
  routines?: RoutineInterface[];
}

const AthleteTraining: React.FC = () => {
  const { athlete } = useAthlete();
  const [training, setTrainings] = useState({} as TrainingInterface);
  const [routines, setRoutines] = useState([]);
  const [routine, setRoutine] = useState<RoutineInterface>();
  const { setTraining } = useTraining();
  const history = useHistory();

  useEffect(() => {
    async function getTraining(): Promise<void> {
      try {

        if (athlete.trainings) {
          const response = await api.get(
            `/routines/${athlete.trainings[0].id}`,
          );

          setRoutine(response.data[0]);
          setRoutines(response.data);
          setTrainings(athlete.trainings[0]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getTraining();
  }, [athlete, training]);



  async function deleteExercice(exercice_id): Promise<void> {
    await api.delete(`/routine_exercice/${exercice_id}`);
  }
  const SortableItem = SortableElement(({ exercice }) => {
    return (
      <li>
        <div className="exercice-border">
          {/* <iframe
              width="80%"
              height="80%"
              style={{ borderRadius: '6px', marginTop: '15px' }}
              src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
            /> */}
        </div>
        <div className="exercice-info">
          <div className="exercice-title">
            <p>{exercice.exercice_name}</p>
            <div className="exercice-icons">
              <p>
                <ViewRoutine icon="view" />
              </p>
              <p>
                <MdEdit size={25} />
              </p>

              <p>
                <MdDelete
                  onClick={() => deleteExercice(exercice.exercice_id)}
                  size={25}
                />
              </p>
            </div>
          </div>
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
                <td>{exercice.sequence}</td>
                <td>{exercice.repetitions}</td>
                <td>{exercice.volume}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    )
  });

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div className='exercice-info'>
        <ul>
          {items.map((value, index) => (
            <SortableItem key={`item-${value}`} index={index} exercice={value} />
          ))}
        </ul>
      </div>
    );
  });



  return (
    <Content>
      {training.title ? (
        <TrainingContainer>
          <div className="training">
            <div className="training-image">
              <img
                alt='training'
                src={training.objective === 1 ? hipertrofia : emagrecimento}
              />
            </div>
            <div className="training-about">
              <h4>{training.title}</h4>
              <p>Iniciante</p>
              <div className="icons-action">
                <span
                  onClick={() => {
                    setTraining(training);
                    setTimeout(() => history.push('/training-info'), 0);
                  }}
                >
                  <MdRemoveRedEye size={25} />
                </span>
                <span>
                  <AddTraining
                    icon="change"
                    newTraining={setTrainings}
                    newRoutine={setRoutine}
                    newRoutines={setRoutines}
                  />
                </span>
              </div>
            </div>
            <div className="routines">
              {routines.length > 0 &&
                routines.map(r => (
                  <div
                    onClick={() => setRoutine(r)}
                    className={
                      routine
                        ? r.id === routine.id
                          ? 'routine-active'
                          : 'routine-default'
                        : 'routine-default'
                    }
                  >
                    {r.title}
                  </div>
                ))}
            </div>
          </div>
        </TrainingContainer>
      ) : (
          <div className="no-training">
            <h2>Ainda nao foram criados treinos para esse cliente</h2>
            <AddTraining
              newTraining={setTrainings}
              newRoutine={setRoutine}
              newRoutines={setRoutines}
            />
          </div>
        )}
      {routine && routine.routineExercice &&

        <SortableList axis='xy' items={routine.routineExercice} onSortEnd={() => { }} />

      }

    </Content>
  );
};

export default AthleteTraining;
