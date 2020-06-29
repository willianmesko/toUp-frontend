import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import bicps from '~/assets/icons/bicps.svg';
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
        {trainings.length > 0 && <input placeholder="buscar" />}

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
                setTimeout(() => history.push('/training-info'), 0);
              }}
            >
              <div className="card-profile">
                <div className="card-avatar-training">
                  <img src={bicps} alt="Person" />
                </div>
                <div className="card-details">
                  <div className="name">
                    <p>{trainin.title}</p>
                  </div>
                  <div className="occupation">
                    <p>Hipertrofia</p>
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
