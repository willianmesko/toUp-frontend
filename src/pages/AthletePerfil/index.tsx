import React, { useEffect, useState } from 'react';
import { useAthlete } from '~/hooks/AthleteContext';
import { Container, Content, Cards, TrainingInfo, RoutineInfo } from './styles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import bicps from '~/assets/icons/bicps.svg';
import api from '~/services/api';

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

const AthletePerfil: React.FC = () => {
  const { athlete } = useAthlete();
  const [activeTab, setActiveTab] = useState(0);
  const [training, setTraining] = useState<TrainingInterface>(
    {} as TrainingInterface,
  );
  const [routines, setRoutines] = useState([]);
  const [routine, setRoutine] = useState();
  useEffect(() => {
    async function getTraining(): Promise<void> {
      const response = await api.get(`/training/${athlete.trainings[0].id}`);
      setRoutines(response.data.routines);
      setTraining(response.data);
    }
    getTraining();
  }, [athlete]);
  return (
    <Container>
      {console.log(routines)}
      <Cards></Cards>
      <Tabs>
        <TabList>
          <Tab
            className={activeTab === 0 ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveTab(0)}
          >
            Treinos
          </Tab>
          <Tab
            className={activeTab === 1 ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveTab(1)}
          >
            Avaliações
          </Tab>
        </TabList>
        <TabPanel>
          <Content>
            <TrainingInfo>
              <div className="training-image">
                <img src={bicps} />
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
                      className="routine-active"
                    >
                      {r.title}
                    </div>
                  ))}
              </div>
            </TrainingInfo>
            <RoutineInfo>
              <ul>
                <li>
                  <div className="exercice-video">
                    <iframe
                      width="80%"
                      height="80%"
                      style={{ borderRadius: '6px', marginTop: '15px' }}
                      src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                    />
                  </div>
                  <div className="exercice-info">
                    <p>Supino Reto</p>
                    <p>3x12 20kg</p>
                  </div>
                </li>

                <li>
                  <div className="exercice-video">
                    <iframe
                      width="80%"
                      height="80%"
                      style={{ borderRadius: '6px', marginTop: '15px' }}
                      src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                    />
                  </div>
                  <div className="exercice-info">
                    <p>Supino Reto</p>
                    <p>3x12 20kg</p>
                  </div>
                </li>
                <li>
                  <div className="exercice-video">
                    <iframe
                      width="80%"
                      height="80%"
                      style={{ borderRadius: '6px', marginTop: '15px' }}
                      src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                    />
                  </div>
                  <div className="exercice-info">
                    <p>Supino Reto</p>
                    <p>3x12 20kg</p>
                  </div>
                </li>
                <li>
                  <div className="exercice-video">
                    <iframe
                      width="80%"
                      height="80%"
                      style={{ borderRadius: '6px', marginTop: '15px' }}
                      src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                    />
                  </div>
                  <div className="exercice-info">
                    <p>Supino Reto</p>
                    <p>3x12 20kg</p>
                  </div>
                </li>
                <li>
                  <div className="exercice-video">
                    <iframe
                      width="80%"
                      height="80%"
                      style={{ borderRadius: '6px', marginTop: '15px' }}
                      src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                    />
                  </div>
                  <div className="exercice-info">
                    <p>Supino Reto</p>
                    <p>3x12 20kg</p>
                  </div>
                </li>
              </ul>
            </RoutineInfo>
          </Content>
        </TabPanel>
        <TabPanel>
          <Content></Content>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default AthletePerfil;
