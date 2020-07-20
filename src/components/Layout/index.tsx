import React, { useState } from 'react';
import { GiWeightLiftingUp, GiWeightLiftingDown } from 'react-icons/gi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { useLocation, Link } from 'react-router-dom';
import { IoIosFitness } from 'react-icons/io';
import { GiStrong } from 'react-icons/gi';
import { FaRuler } from 'react-icons/fa';
import Header from '~/components/Header';
import {
  TopArea,
  Content,
  MenuLateral,
  SideMenu,
  Container,
  LinksUtils,
  Post,
} from './styles';
import { UserInfo } from './Userinfo';
import { useAuth } from '~/hooks/AuthContext';
import { AthleteInfo } from './AthleteInfo';
import { TrainingInfo } from './TrainingInfo';
import articleTrainer from '~/assets/utils.jpg';
import avaliacao from '~/assets/avaliacao.jpg';

export const Layout = ({ sideBar, topBar, children, sideMenu, linksUtils }) => {
  const [widthMenuLateral, setWidth] = useState(380);
  const location = useLocation();
  const { role } = useAuth();
  const renderComponentInfo = () => {
    switch (location.pathname) {
      case '/training':
        return <UserInfo />;
        break;
      case '/athletes':
        return <UserInfo />;
        break;
      case '/perfil-athlete':
        return <AthleteInfo />;
        break;
      case '/training-info':
        return <TrainingInfo />;
        break;
    }
  };

  return (
    <>
      <Header />

      <Container>
        {sideMenu && (
          <SideMenu>
            {role === 'trainer' ? (
              <div>
                <Link to="/dashboard">
                  <span
                    className={
                      location.pathname === '/dashboard' ? 'active' : 'default'
                    }
                  >
                    <AiOutlineDashboard size={40} />
                    Dashboard
                  </span>
                </Link>
                <Link to="/athletes">
                  <span
                    className={
                      location.pathname === '/athletes' ? 'active' : 'default'
                    }
                  >
                    <GiWeightLiftingUp size={50} />
                    Alunos
                  </span>
                </Link>
                <Link to="/training">
                  <span
                    className={
                      location.pathname === '/training' ? 'active' : 'default'
                    }
                  >
                    <GiWeightLiftingDown size={50} />
                    Treinos
                  </span>
                </Link>
                <Link to="/exercices">
                  <span
                    className={
                      location.pathname === '/exercices' ? 'active' : 'default'
                    }
                  >
                    <IoIosFitness size={50} />
                    Exercicios
                  </span>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/trainer">
                  <span
                    className={
                      location.pathname === '/trainer' ? 'active' : 'default'
                    }
                  >
                    <GiStrong size={40} />
                    Treinadores
                  </span>
                </Link>
                <Link to="/workout">
                  <span
                    className={
                      location.pathname === '/workout' ? 'active' : 'default'
                    }
                  >
                    <GiWeightLiftingDown size={50} />
                    Treino
                  </span>
                </Link>
                <Link to="/evaluations">
                  <span
                    className={
                      location.pathname === '/evaluations'
                        ? 'active'
                        : 'default'
                    }
                  >
                    <FaRuler size={40} />
                    Avaliaçoes
                  </span>
                </Link>
              </div>
            )}
          </SideMenu>
        )}

        <Content
          margin={sideMenu ? '100px' : 'auto'}
          flexDirection={sideBar ? 'row' : 'column'}
        >
          {topBar && (
            <>
              <TopArea>
                <h1>
                  {location.pathname === '/training' ? 'Treinos' : 'Alunos'}
                </h1>
                <hr />
              </TopArea>
            </>
          )}

          {sideBar && (
            <MenuLateral
              width={widthMenuLateral}
              onClick={() => setWidth(5000)}
            >
              {renderComponentInfo()}
            </MenuLateral>
          )}
          {children}
        </Content>
        {linksUtils && (
          <LinksUtils>
            <h5>Links Uteis</h5>

            <Post>
              <img src={articleTrainer} alt="article" />
              <p>Como montar um treino efeciente </p>
            </Post>
            <hr />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.appto.com.br/blog/2017/09/18/avaliacao-fisica-entenda-como-realmente-pode-ajuda-lo-a-atingir-resultados"
            >
              <Post>
                <img src={avaliacao} alt="avaliacao" />
                <p>Avaliação física: entenda como realmente pode ajudá-lo a </p>
              </Post>
            </a>
          </LinksUtils>
        )}
      </Container>
    </>
  );
};
