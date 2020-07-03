import React, { useState, useEffect } from 'react';
import { GiWeightLiftingUp, GiWeightLiftingDown } from 'react-icons/gi';
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
  const [activeUrl, setActiveUrl] = useState();
  const location = useLocation();
  const lastLocation = useLastLocation();
  const [loadingBar, setLoadingBar] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location]);
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
          <Link to={lastLocation ? lastLocation : '/dashboard'}>
            <FiArrowLeft /> Voltar
          </Link>
        </nav>
        {(activeUrl === '/perfil-athlete' ||
          activeUrl === '/training-info') && (
          <Menu>
            <LoadingBar
              progress={loadingBar}
              height={5}
              continuousStart={20}
              color="#054f77"
              onLoaderFinished={() => completeLoading()}
            />
            <li
              className={activeUrl === '/perfil-athlete' ? 'active' : ''}
              onClick={() => {
                completeLoading('/athletes');
              }}
            >
              <GiWeightLiftingDown size={40} />
              {activeUrl === '/perfil-athlete' ? (
                <small>Trocar aluno </small>
              ) : (
                <small>Ir para alunos</small>
              )}
            </li>
            <li
              className={activeUrl === '/training-info' ? 'active' : ''}
              onClick={() => {
                completeLoading('/training');
              }}
            >
              <GiWeightLiftingDown size={40} />
              {activeUrl === '/training-info' ? (
                <small>Trocar treino </small>
              ) : (
                <small>Ir para treinos</small>
              )}
            </li>
          </Menu>
        )}

        <aside>
          {/* <Notification /> */}
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              tag="div"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
            >
              <Profile>
                <div>
                  <strong>{user.name}</strong>
                  <Link to="/profile">{user.email}</Link>
                </div>
                {user.avatar_url ? (
                  <img src={user.avatar_url} alt="avatarfake" />
                ) : (
                  <div className="no-image">
                    <h1>{user.name.charAt(0)}</h1>
                  </div>
                )}
              </Profile>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/profile">Conta</Link>
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