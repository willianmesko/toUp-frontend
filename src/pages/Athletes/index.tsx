import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '~/components/Profile';
import Button from '~/components/Button';

import { AthleteField } from './styles';
const Athletes: React.FC = () => {
  return (
    <>
      <div>
        <AthleteField>
          <input placeholder="buscar" />
          <Link to="newAthlete">Novo Aluno</Link>
        </AthleteField>
        <Profile />
      </div>
    </>
  );
};

export default Athletes;
