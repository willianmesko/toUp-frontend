import React from 'react';
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
import { Container, Content, ChartArea, EvaluationInfo } from './styles';

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
    { country: 'Músculo', area: 70 },
    { country: 'Gordura', area: 30 },

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
          <h3>Pollock 7 Dobras</h3>

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
          <h3>Resultado</h3>

          <div className="charts">

            <div className='chartResult'>
              <p><b>Percentual de Gordura</b></p>
              <div className="legend">
                <div className="legend-1" /> <p>Gordura - 30%</p>
                <div className="legend-2" /> <p>Massa Magra - 70%</p>
              </div>
              <Chart

                width={250}
                height={200}
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
              <div className="legend">
                <div className="legend-1"></div><p>Massa Gorda - 24.6kg</p>
                <div className="legend-2"></div><p>Massa Magra - 67.6kg</p>
              </div>
              <Chart
                width={350}
                height={200}
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
          <div className='infoResult'>
            <ol>
              <li><b>IMC: </b>27.8 Sobrepeso.</li>
              <li><b>RCQ: </b>2</li>

              <li><b>Perimetria:</b> 330cm</li>
              <li><b>Antrometria:</b> 210mm</li>

              <li><b>Peso Ideal:</b> 30Kgs</li>
              <li><b>% Proposta:</b> 14%</li>
              <li><b>Gordura Ideal:</b> 4.2Kgs</li>
              <li><b>Massa Ideal:</b> 25.8Kgs</li>
              <li><b>Gordura Excedente:</b> 4.2Kgs - 24.43Kgs = 20.23Kgs</li>
              <li><b>Carência Muscular: </b>20.23Kgs</li>
            </ol>

          </div>


        </ChartArea>
      </Content>
    </Container>
  );
};

export default ViewAthleteEvaluation;
