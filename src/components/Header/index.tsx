import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/to-up2.png';
import { Container, Content, Profile } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="ToUp" />
          </Link>
        </nav>

        <aside>
          {/* <Notification /> */}
          <Link to="/account">
            <Profile>
              <div>
                <strong>Willian Mesko</strong>
                <Link to="/account">willianmesko@hotmail.com</Link>
              </div>
              <img
                src="https://yt3.ggpht.com/a-/AOh14GjDM_FdVyl5v7gQrGyIgjf770GJBujpn9Q3LLI2cTI=s88-c-k-c0xffffffff-no-rj-mo"
                alt="avatarfake"
              />
            </Profile>
          </Link>
        </aside>
      </Content>
    </Container>
  );
};
export default Header;
