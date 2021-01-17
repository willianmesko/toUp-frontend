import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import Evaluation from '~/interfaces/evaluationInterface';
import { Container, Content, ChartArea,EvaluationInfo } from './styles';

interface ViewAthleteEvaluation {
  children?: React.ReactNode;
  evaluation?: Evaluation;
  viewEvaluation(show: boolean): void;
}

const ViewAthleteEvaluation: React.FC<ViewAthleteEvaluation> = ({
  evaluation,
  viewEvaluation,
}) => {
  const data = [
    { country: 'Russia', area: 12 },
    { country: 'Canada', area: 7 },
    { country: 'USA', area: 7 },
    { country: 'China', area: 7 },
    { country: 'Brazil', area: 6 },
    { country: 'Australia', area: 5 },
    { country: 'India', area: 2 },
    { country: 'Others', area: 55 },
  ];

   const ageStructure = [{
    state: 'Germany',
    young: 6.7,
    middle: 28.6,
    older: 5.1,
  }, {
    state: 'Japan',
    young: 9.6,
    middle: 43.4,
    older: 9,
  }, {
    state: 'Russia',
    young: 13.5,
    middle: 49,
    older: 5.8,
  }, {
    state: 'USA',
    young: 30,
    middle: 90.3,
    older: 14.5,
  }];
  return (
    <Container>
      <p
        aria-hidden="true"
        onClick={() => {
          viewEvaluation(false);
        }}
      >
        voltar
      </p>

      <Content>
        <EvaluationInfo>
          <h2>Pollock 7 Dobras</h2>

        <div>
          <div>

          <ol>
          <p>Geral</p>
            <li><b>Protocolo:</b> Pollock 7 Dobras</li>
            <li><b>Data da Avaliação:</b> 16/01/2021</li>
            <li><b>Peso:</b> 90.0Kgs</li>
            <li><b>Altura:</b> 180.0cm</li>
            <li><b>Idade:</b> 26</li>
          </ol>

          </div>
          <div>

          <ol>
             <p>Perimetria</p>
            <li><b>Pescoço: </b>30.0cm</li>
            <li><b>Ombro: </b> 30.0cm</li>
            <li><b>Torax:</b> 30.0cm</li>
            <li><b>Abdomen:</b> 30.0cm</li>
            <li><b>Cintura:</b> 30.0cm</li>
            <li><b>Quadril: </b>30.0cm</li>
            <li><b>Braço Esquerdo:</b> 30.0cm</li>
            <li><b>Braço Direito:</b> 30.0cm</li>
            <li><b>Coxa Esquerdo:</b> 30.0cm</li>
            <li><b>Coxa Direita: </b> 30.0cm</li>
            <li><b>Perna Esquerdo:</b> 30.0cm</li>
            <li><b>Perna Direita : </b>30.0cm</li>

          </ol>
          </div>
          <div>
          <ol>
            <p>Antropometria</p>
            <li><b>Tricipital: </b> 30.0mm</li>
            <li><b>Abdominal: </b> 30.0mm</li>
            <li><b>Peitoral: </b> 30.0mm</li>
            <li><b>Subscapular: </b> 30.0mm</li>
            <li><b>Supra-Ilíaca: </b> 30.0mm</li>
            <li><b>Coxa: </b> 30.0mm</li>
          </ol>
          </div>
          </div>
        </EvaluationInfo>

      <ChartArea>
      <h2>Resultado</h2>
      <div>
        <div className='chartResult'>
          <p><b>Percentual de Gordura</b></p>
        <Chart
           width={300}
           height={250}
          data={data}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
        </Chart>
    </div>

    <div className='chartResult'>
    <p><b>Massa Magra x Mass Gorda</b></p>
    <Chart
       width={400}
       height={250}
          data={ageStructure}
        >
           <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="young"
            argumentField="state"
            name="Young"
          />
          <BarSeries
            valueField="middle"
            argumentField="state"
            name="Middle"
          />
          <BarSeries
            valueField="older"
            argumentField="state"
            name="Older"
          />
          <Stack />
        </Chart>
    </div>
  </div>
      </ChartArea>



      </Content>
    </Container>
  );
};

export default ViewAthleteEvaluation;
