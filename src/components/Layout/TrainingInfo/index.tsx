import React from 'react';
import { GiWeightLiftingUp, GiWeight, GiBodyHeight } from 'react-icons/gi';
import { AiFillCalculator } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';

import { useTraining } from '~/hooks/TrainingContext';

const TrainingInfo: React.FC = () => {
  const { training } = useTraining();

  return (
    <>
      <div>
        <img
          src="https://cdn.dribbble.com/users/458522/screenshots/3374303/goku_rgb_dribbbler.jpg"
          alt="Person"
        />
        <h2>{training.title}</h2>
        <hr />
        <h3>Plano lite</h3>
        <div className="information-area">
          <li>
            <p>
              <FaBirthdayCake />
            </p>
          </li>
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
