import React, { useState } from 'react';
import { useAthlete } from '~/hooks/AthleteContext';
import { Container, Content, MenuLateral } from './styles';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AthleteTraining from './AthleteTraining/index';
import AthleteEvaluation from './AthleteEvaluation';
import AddEvaluation from './AthleteEvaluation/AddEvaluation';
import { AthleteInfo } from '~/components/AthleteInfo';

const AthletePerfil: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [addEvaluation, setAddEvaluation] = useState(false);

  const { athlete } = useAthlete();
  return (
    <Container>
      <MenuLateral >
        <AthleteInfo />
      </MenuLateral>
      <Tabs>
        <TabList>
          {/* <Tab
            className={activeTab === 0 ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveTab(0)}
          >
            Geral
          </Tab> */}
          <Tab
            className={activeTab === 0 ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveTab(0)}
          >
            Treinos
          </Tab>

          <Tab
            className={activeTab === 2 ? 'activeTab' : 'defaultTab'}
            onClick={() => setActiveTab(2)}
          >
            Avaliações
          </Tab>
        </TabList>
        {/* <TabPanel>
          <div style={{ width: '800px' }}>
            <h1>Geral</h1>
          </div>
        </TabPanel> */}
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
