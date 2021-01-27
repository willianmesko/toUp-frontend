import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import {
  Container,
  Content,
  AthleteCard,
  LoadingMore,
  Avatar,
  Tabs,
  Tab,
  About
} from './styles';
import api from '~/services/api';
import Button from '~/components/Button';
import { useAthlete } from '~/hooks/AthleteContext';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { networkInterfaces } from 'os';

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
  const [netWorkAthletes, setNetWorkAthletes] = useState([]);
  const [copyAthletes, setCopyAthletes] = useState<Athlete[]>([]);
  const { setAthlete } = useAthlete();
  const [loadingBar, setLoadingBar] = useState<number>(0);
  const [visible, setVisible] = useState<number>(8);
  const [, setFilter] = useState('');
  const history = useHistory();
  const [skeleton, setSkeleton] = useState(false);

  const [tabs, setTabs] = useState({
    myAthletes: true,
    network: false
  })

  useEffect(() => {
    async function getAthletes(): Promise<void> {
      setSkeleton(true);
      const { data } = await api.get('/athletes');

      setSkeleton(false);

      setCopyAthletes(data);
      setAthletes(data);
    }

    getAthletes();
  }, []);

  async function getNetWorkAthletes(): Promise<void> {
    setTabs({
      myAthletes: false,
      network: true
    })
    if (networkInterfaces.length === 0) {
      const newtWorkAthletes = await api.get('/athletes/all');

      setNetWorkAthletes(newtWorkAthletes.data)
    }

  }


  const filterAthlete = value => {
    setFilter(value);

    const filterab: Athlete[] = athletes.filter(athlete => {
      return athlete.name.toLowerCase().startsWith(value);
    });
    setSkeleton(true);

    setTimeout(() => {
      setAthletes(value.length >= 2 ? filterab : copyAthletes);
      setSkeleton(false);
    }, 500);
  };
  return (
    <>
      <Container>
        <LoadingBar
          progress={loadingBar}
          height={3}
          color="#93ccea"
          onLoaderFinished={() => setLoadingBar(0)}
        />

        <Tabs>
          <Tab>
            <li onClick={() => setTabs({
              myAthletes: true,
              network: false
            })} className={tabs.myAthletes ? 'active' : 'default'}><h2>Meus Alunos</h2></li>
            <li onClick={getNetWorkAthletes} className={tabs.network ? 'active' : 'default'} ><h2>Rede de alunos</h2></li>
          </Tab>

          <Tab>
            {athletes.length > 0 && (
              <input
                onChange={e => filterAthlete(e.target.value)}
                placeholder="Pesquisar"
              />)}
            <span onClick={() => {
              setLoadingBar(100);
              setTimeout(() => history.push('new-athlete'), 180);
            }}>
              <Button width="150px" height="40px">
                Novo aluno
              </Button>
            </span>

          </Tab>
        </Tabs>
        <Content>
          {tabs.myAthletes ? athletes && athletes.map(athlete => {
            return (
              <AthleteCard key={athlete.id} onClick={() => {
                setAthlete(athlete);
                history.push('/perfil-athlete');
              }} >
                <Avatar >
                  <div className="defaultImage"> {athlete.name.charAt(0).toUpperCase()} </div>
                  <h3>{athlete.name}</h3>
                </Avatar >

                <About>
                  <li><b>Idade:</b> {athlete.age} anos</li>
                  <li><b>Peso:</b> {athlete.body_mass} kg</li>
                  <li><b>Altura:</b> {athlete.stature} cm</li>
                </About>
              </AthleteCard>
            )
          }) : netWorkAthletes && netWorkAthletes.map(netWorkAthlete => {
            return (
              <AthleteCard >
                <Avatar >
                  <div className="defaultImage"> A </div>
                  <h3>{netWorkAthlete.name}</h3>
                </Avatar >

                <About>
                  <li><b>Idade:</b> {netWorkAthlete.age} anos</li>
                  <li><b>Peso:</b> {netWorkAthlete.body_mass} kg</li>
                  <li><b>Altura:</b> {netWorkAthlete.stature} cm</li>

                  <Button height='45px' width='70%'>
                    Contatar
              </Button>
                </About>


              </AthleteCard>
            )
          })}


        </Content>
        {skeleton && (
          <Content>

            <SkeletonTheme color="#D3D3D3" highlightColor="#C0C0C0">
              <Skeleton width="270px" height="375px" duration={2} />
            </SkeletonTheme>
            <SkeletonTheme color="#D3D3D3" highlightColor="#C0C0C0">
              <Skeleton width="270px" height="375px" duration={2} />
            </SkeletonTheme>
            <SkeletonTheme color="#D3D3D3" highlightColor="#C0C0C0">
              <Skeleton width="270px" height="375px" duration={2} />
            </SkeletonTheme>
            <SkeletonTheme color="#D3D3D3" highlightColor="#C0C0C0">
              <Skeleton width="270px" height="375px" duration={2} />
            </SkeletonTheme>




          </Content>
        )}
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
