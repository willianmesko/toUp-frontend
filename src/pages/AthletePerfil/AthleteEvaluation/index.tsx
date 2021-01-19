import React, { useEffect, useState } from 'react';
import Button from '~/components/Button';
import { Container } from './styles';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdEdit } from 'react-icons/md';
import background from '~/assets/icons/adipometro.svg';
import Athlete from '~/interfaces/athleteInterface';
import Evaluation from '~/interfaces/evaluationInterface';
import api from '~/services/api';
import ViewAthleteEvaluation from './ViewAthleteEvaluation';

interface AthleteEvaluationProps {
  children?: React.ReactNode;
  athlete: Athlete;
  addEvaluation(show: boolean): void;
}

const AthleteEvaluation: React.FC<AthleteEvaluationProps> = ({
  athlete,
  addEvaluation,
}) => {
  const [evaluations, setEvaluations] = useState([]);
  const [evaluation, setEvaluation] = useState({} as Evaluation);
  const [viewEvaluation, setViewEvaluation] = useState(false);
  useEffect(() => {
    async function getEvaluation(): Promise<void> {
      const response = await api.get(`/evaluation/${athlete.id}`);
      setEvaluations(response.data);
    }
    getEvaluation();
  }, [athlete.id]);

  return (
    <Container>
      {!viewEvaluation ? (
        <>
          <Button onClick={() => addEvaluation(true)}>+ Avaliação</Button>
          <VerticalTimeline>
            {evaluations.length > 0 &&
              evaluations.map(evaluatio => (
                <VerticalTimelineElement
                  className="evaluationCard"
                  contentStyle={{
                    color: '#000',
                    height: '200px',
                    borderLeft: '8px solid rgb(42, 159, 255)',
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '150px',
                    backgroundPositionX: '100%',
                    backgroundPositionY: '100%',
                    cursor: 'pointer',

                    hover: {
                      color: 'pink',
                    },
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdEdit />}
                >
                  <h3
                    onClick={() => {
                      setViewEvaluation(true);
                      setEvaluation(evaluatio);
                    }}
                    className="vertical-timeline-element-title"
                  >
                    {evaluatio.type_title}
                  </h3>{' '}
                  <b>Data:</b> 20/10/2020
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </>
      ) : (
        <ViewAthleteEvaluation
          viewEvaluation={setViewEvaluation}
          evaluation={evaluation}
        />
      )}
    </Container>
  );
};

export default AthleteEvaluation;
