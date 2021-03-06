import React from 'react';
import { GiWeight, GiBodyHeight } from 'react-icons/gi';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { useAthlete } from '~/hooks/AthleteContext';

import { AvatarInput } from '~/pages/Profile/styles';
import Button from '~/components/Button';


const AthleteInfo: React.FC = () => {
  const { athlete } = useAthlete();


  // const handleChangeAvatar = useCallback(
  //   (e: ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files) {
  //       const data = new FormData();

  //       data.append('avatar', e.target.files[0]);

  //       api.patch(`/athletes/avatar/${athlete.id}`, data).then(response => {
  //         setAthlete(response.data);
  //       });
  //     }
  //   },
  //   [setAthlete, athlete.id],
  // );

  return (
    <>
      <div>
        <AvatarInput>
          {athlete.avatar_url ? (
            <img src={athlete.avatar_url} alt={athlete.name} />
          ) : (
            <div className="no-image">
              <p>{athlete.name ? athlete.name.charAt(0).toUpperCase() : 'A'}</p>
            </div>
          )}

        </AvatarInput>

        <h2>{athlete.name}</h2>
        <hr />
        <h5>Plano basic</h5>
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

          {/* <li>
            <p>
              <AiFillCalculator /> {imcClassification()}
            </p>
          </li> */}
        </div>

        <div className="mediasocial-area">
          <AiFillInstagram size={30} />
          <AiFillFacebook size={30} />
          <AiOutlineWhatsApp size={30} />

        </div>

        <Button>Desativar Conta</Button>
      </div>
    </>
  );
};

export { AthleteInfo };
