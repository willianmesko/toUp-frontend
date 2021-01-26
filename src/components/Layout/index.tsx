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
import articleTrainer from '~/assets/utils.jpg';
import avaliacao from '~/assets/avaliacao.jpg';

export const Layout = ({ children, menu }) => {
  const location = useLocation();
  const { role, user } = useAuth();


  return (


    <Container>
      <Header />

      {menu && (
        <Menu>
          {role === 'trainer' ? (
            <div>
              <Link to="/dashboard">
                <span
                  className={
                    location.pathname === '/dashboard' ? 'active' : 'default'
                  }
                >
                  <AiOutlineDashboard size={35} />
                    Dashboard
                  </span>
              </Link>
              <Link to="/athletes">
                <span
                  className={
                    location.pathname === '/athletes' ? 'active' : 'default'
                  }
                >
                  <GiWeightLiftingUp size={35} />
                    Alunos
                  </span>
              </Link>
              {/* <Link to="/training">
                <span
                  className={
                    location.pathname === '/training' ? 'active' : 'default'
                  }
                >
                  <GiWeightLiftingDown size={35} />
                    Treinos
                  </span>
              </Link> */}
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
                {user.trainer_id && (
                  <Link to="/trainer">
                    <span
                      className={
                        location.pathname === '/trainer' ? 'active' : 'default'
                      }
                    >
                      <GiStrong size={35} />
                      Treinadores
                    </span>
                  </Link>
                )}
                <Link to="/workout">
                  <span
                    className={
                      location.pathname === '/workout' ? 'active' : 'default'
                    }
                  >
                    <GiWeightLiftingDown size={35} />
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
        </Menu>
      )}

      <Content>
        {children}
      </Content>
    </Container>

  );
};
