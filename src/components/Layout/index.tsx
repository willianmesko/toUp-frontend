import React from 'react';
import { GiWeightLiftingUp, GiWeightLiftingDown } from 'react-icons/gi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { useLocation, Link } from 'react-router-dom';
import { IoIosFitness } from 'react-icons/io';
import { GiStrong } from 'react-icons/gi';
import { FaRuler } from 'react-icons/fa';
import Header from '~/components/Header';
import {
  Content,
  Menu,
  Container,

} from './styles';
import { useAuth } from '~/hooks/AuthContext';

const roles = {
  trainer: {
    permissions: ['dashboard', 'athletes', 'exercices'],
    icons: {
      dashboard: <AiOutlineDashboard size={35} />,
      athletes: <GiWeightLiftingUp size={35} />,
      exercices: <IoIosFitness size={50} />
    },

  },
  athlete: {
    permissions: ['trainer', 'workout', 'evaluations'],
    icons: {
      trainer: <GiStrong size={35} />,
      workout: <GiWeightLiftingDown size={35} />,
      evaluations: <FaRuler size={40} />
    },
  }
}



export const Layout = ({ children, menu }) => {
  const location = useLocation();
  const { role } = useAuth();


  return (


    <Container>
      <Header />

      {menu && (
        <Menu>
          <div>
            {roles[role].permissions.map(permission => {
              return (
                <Link to={`/${permission}`}>
                  <span
                    className={
                      location.pathname === `/${permission}` ? 'active' : 'default'
                    }
                  >
                    {roles[role].icons[permission]}
                    <p>{permission}</p>
                  </span>
                </Link>
              )
            })}
          </div>
        </Menu>
      )}


      <Content>
        {children}
      </Content>
    </Container>

  );
};
