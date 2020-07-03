import React, { useEffect, useState } from 'react';
import { useAthlete } from '~/hooks/AthleteContext';
import { Container, Content } from './styles';
import { MdDelete, MdEdit, MdSave } from 'react-icons/md';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AthleteTraining from './AthleteTraining';

const AthletePerfil: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

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
          <Content></Content>
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
