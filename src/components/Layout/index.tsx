import React from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { Container, Content, MenuLateral } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <h1>area de alunos</h1>
        <hr />
        <Content>
          <MenuLateral>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/26778884?v=4"
                alt="Person"
              />
              <h2>Mesko</h2>
            </div>
          </MenuLateral>
          {children}
        </Content>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default Layout;
