import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Hipertrofia from '~/assets/icons/hipertrofia.svg';
import emagrecimento from '~/assets/icons/emagrecimento.svg';
import Alert from '~/components/Alert';
import { Container, TrainingField } from './styles';
import { GrAddCircle } from 'react-icons/gr';
import api from '~/services/api';
import { useTraining } from '~/hooks/TrainingContext';
import { useToast } from '~/hooks/ToastContext';
import { TrainingCard } from './styles';

interface Training {
  id: string;
  title: string;
  description: string;

  objective: number;
  objectiveLabel: string;
}

const Training: React.FC = () => {
  const [trainings, setTrainings] = useState<Training[]>([]);
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
      setTrainings(data);
    }
    getTraining();
  }, []);

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
        {trainings.length > 0 && <input placeholder="buscar" />}

        <Link to="new-training">
          <GrAddCircle size={40} color="#87868B" />
        </Link>
      </TrainingField>
      <TrainingCard>
        {trainings &&
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
                      <span className="value">
                        <p> kg </p>
                      </span>
                      <span className="label">
                        <p>Peso</p>
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
      </TrainingCard>
    </Container>
  );
};

export default Training;
