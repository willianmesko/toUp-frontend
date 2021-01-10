import React, { useCallback, ChangeEvent } from 'react';
import { GiWeight, GiBodyHeight } from 'react-icons/gi';
import {
  AiFillCalculator,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillMail,
} from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';
import { useAthlete } from '~/hooks/AthleteContext';

import { AvatarInput } from '~/pages/Profile/styles';
import Button from '~/components/Button';
import api from '~/services/api';

const AthleteInfo: React.FC = () => {
  const { athlete, setAthlete } = useAthlete();
  function imcClassification(): string {
    let category;
    if (athlete.imc < 18.5) category = 'Abaixo do peso';
    if (athlete.imc > 18.5 && athlete.imc < 24.9) category = 'Peso Normal';
    if (athlete.imc >= 25.0 && athlete.imc <= 29.9) category = 'Peso Normal';
    if (athlete.imc >= 30) category = 'Obesidade';
    return category;
  }

  const handleChangeAvatar = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch(`/athletes/avatar/${athlete.id}`, data).then(response => {
          setAthlete(response.data);
        });
      }
    },
    [setAthlete, athlete.id],
  );

  return (
    <>
      <div>
        <AvatarInput>
          {athlete.avatar_url ? (
            <img src={athlete.avatar_url} alt={athlete.name} />
          ) : (
            <div className="no-image">
              <p>{athlete.name ? athlete.name.charAt(0) : 'A'}</p>
            </div>
          )}
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>{' '}
        </AvatarInput>

        <h2>{athlete.name}</h2>
        <hr />

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

        <div className="mediasocial-area">
          <AiFillInstagram size={30} />
          <AiFillFacebook size={30} />
          <AiOutlineWhatsApp size={30} />
          <AiFillMail size={30} />
        </div>

        <Button>Desativar Conta</Button>
      </div>
    </>
  );
};

export { AthleteInfo };
