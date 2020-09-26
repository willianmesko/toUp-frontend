import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { GrAddCircle } from 'react-icons/gr';
import { Container, AthleteField, AthleteCard, LoadingMore } from './styles';

import api from '~/services/api';

import { useAthlete } from '~/hooks/AthleteContext';

interface Athlete {
  id: string;
  age: number;
  name: string;
  imc: number;
  email: string;
  body_mass: number;
  stature: number;
  date_of_birth: string;
  physical_activity: number;
  objective: number;
  aerobic_profile: number;
  training_level: number;
  objectiveLabel: string;
  avatar_url?: string;
}

const Athletes: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const { setAthlete } = useAthlete();
  const [loadingBar, setLoadingBar] = useState<number>(0);
  const [visible, setVisible] = useState<number>(3);
  const [filter, setFilter] = useState('');
  const history = useHistory();

  function formatObjective(objective: number): string {
    let label;
    if (objective === 1) label = 'Emagrecimento';
    if (objective === 2) label = 'Hipertrofia';
    return label;
  }

  useEffect(() => {
    async function getAthletes(): Promise<void> {
      const response = await api.get('/athletes');
      const data = response.data.map(athlete => ({
        ...athlete,
        objectiveLabel: formatObjective(athlete.objective),
      }));

      setAthletes(data);
    }
    getAthletes();
  }, []);

  return (
    <>
      <Container>
        <LoadingBar
          progress={loadingBar}
          height={3}
          color="#93ccea"
          onLoaderFinished={() => setLoadingBar(0)}
        />
        <AthleteField>
          {athletes.length > 0 && (
            <input
              onChange={e => setFilter(e.target.value)}
              placeholder="buscar"
            />
          )}

          <span>
            <GrAddCircle
              onClick={() => {
                setLoadingBar(100);
                setTimeout(() => history.push('new-athlete'), [180]);
              }}
              size={40}
              color="#87868B"
            />
          </span>
        </AthleteField>
        <AthleteCard>
          {filter.length >= 3 ? (
            <h1>opa</h1>
          ) : (
            athletes
              .slice(0, visible)

              .map(athlete => {
                return (
                  <div>
                    <div
                      aria-hidden="true"
                      className="card-profile-athlete"
                      onClick={() => {
                        setAthlete(athlete);
                        history.push('/perfil-athlete');
                      }}
                    >
                      <div className="card-avatar">
                        {athlete.avatar_url ? (
                          <img src={athlete.avatar_url} alt={athlete.name} />
                        ) : (
                          <div>
                            <p>{athlete.name.charAt(0)}</p>
                          </div>
                        )}
                      </div>
                      <div className="card-details">
                        <div className="name">
                          <div>{athlete.name}</div>
                          {/* <div className="icons">
                        <GiWeight />
                        <GiWeightLiftingUp />
                        <GiBodyHeight />
                      </div> */}
                        </div>
                        <div className="occupation">
                          <p>{athlete.objectiveLabel}</p>
                        </div>

                        <div className="card-about">
                          <div className="item">
                            <span className="value">
                              <p>{athlete.age} anos</p>
                            </span>
                            <span className="label">
                              <p>Idade</p>
                            </span>
                          </div>
                          <div className="item">
                            <span className="value">
                              <p>{athlete.body_mass} kg </p>
                            </span>
                            <span className="label">
                              <p>Peso</p>
                            </span>
                          </div>
                          <div className="item">
                            <span className="value">
                              <p>{athlete.stature} cm</p>
                            </span>
                            <span className="label">
                              <p>Altura</p>
                            </span>
                          </div>
                        </div>
                        {/* <div className="skills">
                      <span className="value">
                        Immeasurable Physical Prowess, Supernatural Reflexes and
                        Senses, Invulnerability, Indomitable Will, Enhanced
                        Fighting Skill
                      </span>
                    </div> */}
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </AthleteCard>
        {athletes.length > visible && (
          <LoadingMore>
            <button onClick={() => setVisible(visible + 3)}>
              Carregar mais..
            </button>
          </LoadingMore>
        )}
      </Container>
    </>
  );
};

export default Athletes;
