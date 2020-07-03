import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdDelete, MdEdit, MdSave, MdRemoveRedEye } from 'react-icons/md';
import { useAthlete } from '~/hooks/AthleteContext';
import { Content, TrainingContainer, RoutineInfo } from '../styles';
import AddTraining from './AddTraining';
import ViewRoutine from './ViewRoutine';
import hipertrofia from '~/assets/icons/hipertrofia.svg';
import emagrecimento from '~/assets/icons/emagrecimento.svg';
import api from '~/services/api';
import { useTraining } from '~/hooks/TrainingContext';

interface RoutineInterface {
  id: string;
  title: string;
  description: string;
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
  const [routine, setRoutine] = useState();
  const [exercices, setExercices] = useState([]);
  const { setTraining } = useTraining();
  const history = useHistory();

  useEffect(() => {
    async function getTraining(): Promise<void> {
      try {
        const exercicesData = await api.get('/exercices');

        setExercices(exercicesData.data);
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

  const exerciceName = id => {
    const exercice = exercices.find(exercice => exercice.id === id);

    return exercice.name;
  };

  return (
    <Content>
      {athlete.trainings && athlete.trainings.length > 0 ? (
        <TrainingContainer>
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
          <div className="training">
            <div className="training-image">
              <img
                src={training.objective === 1 ? hipertrofia : emagrecimento}
              />
            </div>
            <div className="training-about">
              <h4>{training.title}</h4>
              <p>Iniciante</p>
            </div>
            <div className="routines">
              {routines.length > 0 &&
                routines.map(r => (
                  <div
                    onClick={() => setRoutine(r)}
                    className={
                      r.id == routine.id ? 'routine-active' : 'routine-default'
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
          <h2>Nenhum treino vinculado a esse aluno</h2>
          <AddTraining
            newTraining={setTrainings}
            newRoutine={setRoutine}
            newRoutines={setRoutines}
          />
        </div>
      )}
      <RoutineInfo>
        <ul>
          {routine &&
            routine.routineExercice.map(exercice => (
              <li>
                <div className="exercice-video">
                  {/* <iframe
                          width="80%"
                          height="80%"
                          style={{ borderRadius: '6px', marginTop: '15px' }}
                          src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                        /> */}
                </div>
                <div className="exercice-info">
                  <div className="exercice-title">
                    <p>{exerciceName(exercice.exercice_id)}</p>
                    <div className="exercice-icons">
                      <p>
                        <ViewRoutine icon="view" />
                      </p>
                      <p>
                        <MdEdit size={25} />
                      </p>

                      <p>
                        <MdDelete size={25} />
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
            ))}
        </ul>
      </RoutineInfo>
    </Content>
  );
};

export default AthleteTraining;
