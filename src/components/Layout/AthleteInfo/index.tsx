import React from 'react';
import { GiWeightLiftingUp, GiWeight, GiBodyHeight } from 'react-icons/gi';
import { AiFillCalculator } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { useAthlete } from '~/hooks/AthleteContext';

const AthleteInfo: React.FC = () => {
  const { athlete } = useAthlete();
  function imcClassification(): string {
    let category;
    if (athlete.imc < 18.5) category = 'Abaixo do peso';
    if (athlete.imc > 18.5 && athlete.imc < 24.9) category = 'Peso Normal';
    if (athlete.imc >= 25.0 && athlete.imc <= 29.9) category = 'Peso Normal';
    if (athlete.imc >= 30) category = 'Obesidade';
    return category;
  }
  return (
    <>
      <div>
        <img
          src="https://cdn.dribbble.com/users/458522/screenshots/3374303/goku_rgb_dribbbler.jpg"
          alt="Person"
        />
        <h2>{athlete.name}</h2>
        <hr />
        <h3>Plano lite</h3>
        <div className="information-area">
          <li>
            <p>
              <FaBirthdayCake /> {athlete.age} anos
            </p>
          </li>
          <li>
            <p>
              <GiWeight /> {athlete.body_mass} kg
            </p>
          </li>
          <li>
            <p>
              <GiBodyHeight /> {athlete.stature} cm
            </p>
          </li>

          <li>
            <p>
              <AiFillCalculator /> {imcClassification()}
            </p>
          </li>
        </div>
      </div>
    </>
  );
};

export { AthleteInfo };
