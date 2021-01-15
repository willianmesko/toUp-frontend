import React, { useState } from 'react';
import Notification from './Notification';
import { GiWeightLiftingDown } from 'react-icons/gi';
import { IoIosFitness } from 'react-icons/io';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '~/assets/to-up2.png';
import { useAuth } from '~/hooks/AuthContext';
import { Container, Content, Profile, Menu } from './styles';
import { useLastLocation } from 'react-router-last-location';
import LoadingBar from 'react-top-loading-bar';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Header = () => {
  const history = useHistory();
  const { user, signOut } = useAuth();

  const location = useLocation();
  const lastLocation = useLastLocation();
  const [loadingBar, setLoadingBar] = useState<number>();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  function completeLoading(url = null) {
    if (url) {
      setLoadingBar(100);

      history.push(url);
    } else {
      setLoadingBar(0);
    }
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/athletes">
            <img src={logo} alt="ToUp" />
          </Link>
          <Link to={lastLocation || '/dashboard'}>
            <FiArrowLeft /> Voltar
          </Link>
        </nav>
        {(location.pathname === '/perfil-athlete' ||
          location.pathname === '/training-info') && (
          <Menu>
            <LoadingBar
              progress={loadingBar}
              height={5}
              continuousStart={20}
              color="#054f77"
              onLoaderFinished={() => completeLoading()}
            />
            <li
              className={
                location.pathname === '/perfil-athlete' ? 'active' : ''
              }
              onClick={() => {
                completeLoading('/athletes');
              }}
            >
              <GiWeightLiftingDown size={35} />
              <small>Alunos</small>
            </li>
            <li
              className={location.pathname === '/training-info' ? 'active' : ''}
              onClick={() => {
                completeLoading('/training');
              }}
            >
              <GiWeightLiftingDown size={35} />
              <small>Treinos</small>
            </li>
            <li
              onClick={() => {
                completeLoading('/exercices');
              }}
            >
              <IoIosFitness size={35} />
              <small>Exercícios</small>
            </li>
          </Menu>
        )}

        <aside>
          <Notification />
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              tag="div"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
            >
              <Profile>

                {user.avatar_url ? (
                  <img src={user.avatar_url} alt="avatarfake" />
                ) : (
                  <div className="no-image">
                    <p>{user.name.charAt(0)}</p>
                  </div>
                )}
              </Profile>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/profile">Meus dados</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/me">Meu perfil</Link>
              </DropdownItem>
              <DropdownItem onClick={() => signOut()}>Sair</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </aside>
      </Content>
    </Container>
  );
};
export default Header;
