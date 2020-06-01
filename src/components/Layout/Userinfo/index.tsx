import React from 'react';
import {
  GiWeightLiftingUp,
  GiBroadsword,
  GiCrossedSwords,
} from 'react-icons/gi';
import { IoIosWoman, IoIosMan } from 'react-icons/io';
import { FaBirthdayCake } from 'react-icons/fa';
import { useAuth } from '~/hooks/AuthContext';

const UserInfo: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <div>
        <img
          src="https://avatars3.githubusercontent.com/u/26778884?v=4"
          alt="Person"
        />
        <h2>{user.name}</h2>
        <hr />
        <h3>Plano lite</h3>
        <div className="information-area">
          <li>
            <p>
              <GiWeightLiftingUp /> 5 Alunos ativos{' '}
            </p>
          </li>
          <li>
            <p>
              <IoIosWoman /> 3 alunos são do sexo feminino{' '}
            </p>
          </li>
          <li>
            <p>
              <IoIosMan /> 2 alunos são do sexo masculino{' '}
            </p>
          </li>
          <li>
            <p>
              <FaBirthdayCake /> Faixa etária de 20 a 50 anos{' '}
            </p>
          </li>
          <li>
            <p>
              <GiBroadsword /> 5 Inicantes{' '}
            </p>
          </li>
          <li>
            <p>
              {' '}
              <GiCrossedSwords /> 5 Avançados{' '}
            </p>
          </li>
        </div>
      </div>
    </>
  );
};

export { UserInfo };
