import React, { useMemo } from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { useLocation } from 'react-router-dom';
import { Container, Content, MenuLateral } from './styles';

const Layout: React.FC = ({ children }) => {
  const location = useLocation();

  const url = useMemo(() => location.pathname, [location]);

  return (
    <>
      <Header />
      <Container>
        {url !== '/newAthlete' && url !== '/dashboard' && (
          <>
            <GiWeightLiftingUp size={100} color="#87868B" />
            <h1>Alunos</h1>

            <hr />
          </>
        )}
        <Content>
          {url !== '/newAthlete' && url !== '/dashboard' && (
            <MenuLateral>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/26778884?v=4"
                  alt="Person"
                />
                <h2>Mesko</h2>
              </div>
            </MenuLateral>
          )}

          {children}
        </Content>
      </Container>
    </>
  );
};

export default Layout;
