import React from 'react';
import { GiWeightLiftingUp, GiWeight, GiBodyHeight } from 'react-icons/gi';
import { AiFillCalculator } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import trainingCover from '~/assets/training-card.jpg';
import { useTraining } from '~/hooks/TrainingContext';

const TrainingInfo: React.FC = () => {
  const { training } = useTraining();

  return (
    <>
      <div>
        {/* <img
          style={{ width: '100%', height: '250px', borderRadius: '5px' }}
          src={trainingCover}
          alt="cover"
        /> */}
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
