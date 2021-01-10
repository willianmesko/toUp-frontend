import React, {  useState } from 'react';
import { useAthlete } from '~/hooks/AthleteContext';
import { Container, Content } from './styles';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AthleteTraining from './AthleteTraining';
import AthleteEvaluation from './AthleteEvaluation';
import AddEvaluation from './AthleteEvaluation/AddEvaluation';

const AthletePerfil: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [addEvaluation, setAddEvaluation] = useState(false);

  const { athlete } = useAthlete();
  return (
    <Container>
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
          <Tab
            className={activeTab === 2 ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveTab(2)}
          >
            Evolução
          </Tab>
          <Tab
            className={activeTab === 3 ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveTab(3)}
          >
            Fotos
          </Tab>
        </TabList>
        <TabPanel>
          <AthleteTraining />
        </TabPanel>
        <TabPanel>
          <Content>
            {addEvaluation ? (
              <AddEvaluation
                addEvaluation={setAddEvaluation}
                athlete={athlete}
              />
            ) : (
              <>
                <AthleteEvaluation
                  addEvaluation={setAddEvaluation}
                  athlete={athlete}
                />
              </>
            )}
          </Content>
        </TabPanel>
        <TabPanel>
          <Content></Content>
        </TabPanel>
        <TabPanel>
          <Content></Content>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default AthletePerfil;
