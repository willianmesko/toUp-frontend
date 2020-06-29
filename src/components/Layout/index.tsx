import React, { useState } from 'react';

import Header from '~/components/Header';
import { TopArea, Content, MenuLateral } from './styles';
import { UserInfo } from './Userinfo';
import { AthleteInfo } from './AthleteInfo';
import { TrainingInfo } from './TrainingInfo';
export const Layout = ({ sideBar, topBar, children }) => {
  const [widthMenuLateral, setWidth] = useState(380);
  const renderComponentInfo = () => {
    switch (window.location.pathname) {
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
      {topBar && (
        <>
          <TopArea>
            {/* {infos.topIcon} */}
            <h1>
              {window.location.pathname === '/training' ? 'Treinos' : 'Alunos'}
            </h1>
            <hr />
          </TopArea>
        </>
      )}
      <Content>
        {sideBar && (
          <MenuLateral width={widthMenuLateral} onClick={() => setWidth(5000)}>
            {renderComponentInfo()}
          </MenuLateral>
        )}
        {widthMenuLateral < 600 ? children : ''}
      </Content>
    </>
  );
};

// export const LeftBox: React.FC = ({ children }) => {};
