import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GiWeightLiftingUp, GiWeightLiftingDown } from 'react-icons/gi';
import { Cards } from './styles';
import LoadingBar from 'react-top-loading-bar';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [loadingBar, setLoadingBar] = useState<number>(0);
  const [redirectPage, setRedirectPage] = useState('');
  return (
    <>
      <LoadingBar
        progress={loadingBar}
        height={5}
        continuousStart={20}
        color="#054f77"
        onLoaderFinished={() => {
          setLoadingBar(0);
          history.push(redirectPage);
        }}
      />
      <Cards>
        <div
          onClick={() => {
            setLoadingBar(100);
            setRedirectPage('/athletes');
          }}
          className="card content"
        >
          <div className="card-content">
            {/* <div className="card-img">
              <img src={signInbackgroundImg} alt="Athletes" />
            </div> */}

            <div className="card-content-labels">
              <GiWeightLiftingUp size={150} color="#87868B" />
              <h1>Alunos</h1>
            </div>
            {/* <div className="card-label">Alunos</div> */}
            <div className="card-title">Gerencie todos seus alunos aqui</div>
          </div>
        </div>

        <div
          onClick={() => {
            setLoadingBar(100);
            setRedirectPage('/training');
          }}
          className="card content"
        >
          <div className="card-content">
            {/* <div className="card-img">
              <img src={signInbackgroundImg} alt="keyboard" />
            </div> */}
            <div className="card-content-labels small">
              <GiWeightLiftingDown size={80} color="#87868B" />
              <h2>Treinos</h2>
            </div>
            <div className="card-title">Gerencie todos seus alunos aqui</div>
          </div>
        </div>
        {/* <div className="card content">
        <div className="card-content">
          <div className="card-img">
            <img src={trainingCard} alt="Controller" />
          </div>
          <div className="card-label">Treinos</div>
          <div className="card-title">Gerencie todos seus treinos aqui</div>
        </div>
      </div> */}
        <div className="card content">
          <div className="card-content">
            {/* <div className="card-img">
            <img src={trainingCard} alt="Trainning" />
          </div> */}

            <div className="card-title">Gerencie todos seus treinos aqui</div>
          </div>
        </div>
      </Cards>
    </>
  );
};

export default Dashboard;
