import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, TrainingField } from './styles';
import { GrAddCircle } from 'react-icons/gr';
import api from '~/services/api';
import { useTraining } from '~/hooks/TrainingContext';
import { TrainingCard } from './styles';

interface Training {
  id: string;
  title: string;
  description: string;
  difficulty: number;
}

const Training: React.FC = () => {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const { setTraining } = useTraining();
  const history = useHistory();
  useEffect(() => {
    async function getTraining(): Promise<void> {
      const response = await api.get('/training');
      setTrainings(response.data);
    }
    getTraining();
  }, []);

  return (
    <Container>
      <TrainingField>
        <input placeholder="buscar" />
        <Link to="new-training">
          <GrAddCircle size={40} color="#87868B" />
        </Link>
      </TrainingField>
      <TrainingCard>
        {trainings &&
          trainings.map(trainin => (
            <div
              onClick={() => {
                setTraining(trainin);
                history.push('/training-info');
              }}
            >
              <div className="card-profile">
                <div className="card-avatar-training">
                  <img
                    src="http://t2.gstatic.com/images?q=tbn:ANd9GcReF05v9LFNyOk7ECwAHzzIx3DDJ45-JJVYgeG2-f6GbMLc2gATDffU0A1D1zNp7Djo4AU8XLp7JdIObdjoXTQ"
                    alt="Person"
                  />
                </div>
                <div className="card-details">
                  <div className="name">
                    <p>{trainin.title}</p>
                  </div>
                  <div className="occupation">
                    <p>Hipertrofia</p>
                  </div>

                  <div className="card-about">
                    <div className="item">
                      <span className="value">
                        <p>25</p>
                      </span>
                      <span className="label">
                        <p>Idade</p>
                      </span>
                    </div>
                    <div className="item">
                      <span className="value">
                        <p>70 kg</p>{' '}
                      </span>
                      <span className="label">
                        <p>Peso</p>
                      </span>
                    </div>
                    <div className="item">
                      <span className="value">
                        <p>175 cm</p>
                      </span>
                      <span className="label">
                        <p>Altura</p>
                      </span>
                    </div>
                  </div>
                  {/* <div className="skills">
                    <p className="value">
                      Immeasurable Physical Prowess, Supernatural Reflexes and
                      Senses, Invulnerability, Indomitable Will, Enhanced
                      Fighting Skill
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </TrainingCard>
    </Container>
  );
};

export default Training;
