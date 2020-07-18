import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import Evaluation from '~/interfaces/evaluationInterface';
import { Container } from './styles';

interface ViewAthleteEvaluation {
  children?: React.ReactNode;
  evaluation?: Evaluation;
  viewEvaluation(show: boolean): void;
}

const ViewAthleteEvaluation: React.FC<ViewAthleteEvaluation> = ({
  evaluation,
  viewEvaluation,
}) => {
  return (
    <Container>
      <p onClick={() => viewEvaluation(false)}>voltar</p>
      {evaluation.type_title}
      <PieChart
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
      />
    </Container>
  );
};

export default ViewAthleteEvaluation;
