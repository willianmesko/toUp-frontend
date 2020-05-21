import React from 'react';
import { Link } from 'react-router-dom';

import signInbackgroundImg from '~/assets/sign-in-background.png';
import trainingCard from '~/assets/training-card.jpg';
import { Cards } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Cards>
      <div className="card content">
        <Link to="/athletes">
          <div className="card-content">
            <div className="card-img">
              <img src={signInbackgroundImg} alt="Athletes" />
            </div>
            <div className="card-label">Alunos</div>
            <div className="card-title">Gerencie todos seus alunos aqui</div>
          </div>
        </Link>
      </div>

      <div className="card content">
        <Link to="/training">
          <div className="card-content">
            <div className="card-img">
              <img src={signInbackgroundImg} alt="keyboard" />
            </div>
            <div className="card-label">Alunos</div>
            <div className="card-title">Gerencie todos seus alunos aqui</div>
          </div>
        </Link>
      </div>
      <div className="card content">
        <div className="card-content">
          <div className="card-img">
            <img src={trainingCard} alt="Controller" />
          </div>
          <div className="card-label">Treinos</div>
          <div className="card-title">Gerencie todos seus treinos aqui</div>
        </div>
      </div>
      <div className="card content">
        <div className="card-content">
          <div className="card-img">
            <img src={trainingCard} alt="Trainning" />
          </div>
          <div className="card-label">Treinos</div>
          <div className="card-title">Gerencie todos seus treinos aqui</div>
        </div>
      </div>
    </Cards>
  );
};

export default Dashboard;
