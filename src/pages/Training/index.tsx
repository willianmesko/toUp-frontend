import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Hipertrofia from '~/assets/icons/hipertrofia.svg';
import emagrecimento from '~/assets/icons/emagrecimento.svg';
import Alert from '~/components/Alert';
import { Container, TrainingField } from './styles';
import { GrAddCircle } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import api from '~/services/api';
import { useTraining } from '~/hooks/TrainingContext';
import { useToast } from '~/hooks/ToastContext';
import { TrainingCard, NoTraining } from './styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface Training {
  id: string;
  title: string;
  description: string;

  objective: number;
  objectiveLabel: string;
}

const Training: React.FC = () => {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [copyTrainings, setCopyTranings] = useState<Training[]>([]);
  const [skeleton, setSkeleton] = useState(false);
  const { setTraining } = useTraining();
  const history = useHistory();
  const [nameDuplicateTraining, setNameDuplicateTraining] = useState();
  const [duplicateTraining, setDuplicateTraining] = useState<Training>();
  const { addToast } = useToast();


  function formatObjective(objective: number): string {
    let label;
    if (objective === 1) label = 'Hipertrofia';
    if (objective === 2) label = 'Emagrecimento';
    if (objective === 3) label = 'Resistencia';
    return label;
  }

  useEffect(() => {
    async function getTraining(): Promise<void> {
      const response = await api.get('/training');
      const data = response.data.map(workout => ({
        ...workout,
        objectiveLabel: formatObjective(workout.objective),
      }));
      setSkeleton(true);
      setCopyTranings(data);
      setTimeout(() => {
        setTrainings(data);
        setSkeleton(false);
      }, 1000);
    }
    getTraining();
  }, []);

  const deleteTraining = async id => {
    await api.delete(`/training/${id}`);
    setTrainings(trainings.filter(training => training.id !== id));
  };
  const cloneTraining = async () => {
    try {
      const response = await api.post(
        `/training/duplicate/${duplicateTraining.id}`,
        {
          title: nameDuplicateTraining,
        },
      );
      if (response.data.id) {
        addToast({
          type: 'success',
          title: 'Treino duplicado! 🏋 ',
          description: 'Treino duplicado com sucesso',
        });
        setTraining(response.data);
        setTimeout(() => history.push('/training-info'), 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TrainingField>
        {trainings.length > 0 && <input placeholder="Pesquisar" />}

        <Link to="new-training">
          <GrAddCircle size={40} color="#87868B" />
        </Link>
      </TrainingField>

      <TrainingCard>
        {trainings.length > 0 &&
          trainings.map(trainin => (
            <div>
              <div className="card-training">
                <div
                  className="card-image"
                  onClick={e => {
                    setTraining(trainin);
                    history.push('/training-info');
                  }}
                >
                  <img
                    src={
                      trainin.objectiveLabel === 'Hipertrofia'
                        ? Hipertrofia
                        : emagrecimento
                    }
                    alt="Person"
                  />
                </div>
                <div className="card-details">
                  <div className="name">
                    <div>{trainin.title}</div>
                    {/* <div className="icons">
                    <GiWeight />
                    <GiWeightLiftingUp />
                    <GiBodyHeight />
                  </div> */}
                  </div>
                  <div className="occupation">
                    <p>{trainin.objectiveLabel}</p>
                  </div>

                  <div className="card-about">
                    <div className="item">
                      <span
                        onClick={() => setDuplicateTraining(trainin)}
                        className="value"
                      >
                        <Alert
                          icon="duplicate"
                          title="Duplicar Treino"
                          text="duplicar"
                          execute={cloneTraining}
                          setNameDuplicateTraining={setNameDuplicateTraining}
                          nameDuplicateTraining={nameDuplicateTraining}
                        />
                      </span>
                      <span className="label">
                        <p>Duplicar</p>
                      </span>
                    </div>
                    <div className="item">
                      <AiFillDelete
                        size={20}
                        onClick={() => deleteTraining(trainin.id)}
                      />
                      <span className="value">
                        <p> Deletar </p>
                      </span>
                    </div>
                    <div className="item">
                      <span className="value">
                        <p> cm</p>
                      </span>
                      <span className="label">
                        <p>Altura</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {skeleton && (
          <NoTraining>
            {copyTrainings.map(skeleton => {
              return (
                <SkeletonTheme color="#D3D3D3" highlightColor="#C0C0C0">
                  <Skeleton width={700} height={200} duration={2} />
                </SkeletonTheme>
              );
            })}
          </NoTraining>
        )}
      </TrainingCard>
    </Container>
  );
};

export default Training;
