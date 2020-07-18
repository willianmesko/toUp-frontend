import React from 'react';
import { GiWeight, GiBodyHeight } from 'react-icons/gi';
import { AiFillCalculator } from 'react-icons/ai';
import Hipertrofia from '~/assets/icons/hipertrofia.svg';
import emagrecimento from '~/assets/icons/emagrecimento.svg';
import { useTraining } from '~/hooks/TrainingContext';
import formatObjective from '~/utils/formatObjectiveLabel';

const TrainingInfo: React.FC = () => {
  const { training } = useTraining();

  return (
    <>
      <div>
        <div className="training-image">
          <img
            src={
              formatObjective(training.objective) === 'Hipertrofia'
                ? Hipertrofia
                : emagrecimento
            }
            alt="cover"
          />
        </div>

        <h2>{training.title}</h2>

        <hr />
        <h3> {console.log(training)}</h3>
        <div className="information-area">
          <li></li>
          <li>
            <p>
              <GiWeight />
            </p>
          </li>
          <li>
            <p>
              <GiBodyHeight />
            </p>
          </li>

          <li>
            <p>
              <AiFillCalculator />
            </p>
          </li>
        </div>
      </div>
    </>
  );
};

export { TrainingInfo };
