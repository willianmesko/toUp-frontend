import React, { useState } from 'react';
import { GiWeightLiftingUp, GiWeightLiftingDown } from 'react-icons/gi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { useLocation, Link } from 'react-router-dom';
import Header from '~/components/Header';
import { TopArea, Content, MenuLateral, SideMenu, Container } from './styles';
import { UserInfo } from './Userinfo';
import { AthleteInfo } from './AthleteInfo';
import { TrainingInfo } from './TrainingInfo';

export const Layout = ({ sideBar, topBar, children, sideMenu }) => {
  const [widthMenuLateral, setWidth] = useState(380);
  const location = useLocation();
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
            </div>
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
      </Container>
    </>
  );
};
