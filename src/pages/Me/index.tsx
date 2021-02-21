import React, { useState, useRef, useCallback, ChangeEvent } from 'react';
import { Form } from '@unform/web';
import { FiCamera } from 'react-icons/fi';
import { FaCity, FaMoneyBillAlt, FaUser } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import api from '../../services/api';
import Button from '~/components/Button';
import { useToast } from '~/hooks/ToastContext';
import { useAuth } from '~/hooks/AuthContext';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Input from '~/components/Inputs/Text';
import { FormHandles } from '@unform/core';
import Select from '~/components/Inputs/Select';
import {
  Container,
  Cover,
  RightBox,
  AboutMe,
  Skills,
  Avatar,
  Info,
  Bio,
  Tags,
  Tag,
} from './styles';
import AboutMeModal from './AboutMe'

interface EditProfileData {
  name: string;
  city: string;
  state: string;
  country: string;
}

interface EditextraInformationsData {
  is_public: number;
  amount_value: number;
}

const Me: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { addToast } = useToast();
  const [bio, setBio] = useState('');
  const [enableEditBio,] = useState(false);
  const [enableEditPerfil, setEnableEditPerfil] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleChangeAvatar = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  const handleEditProfile = useCallback(
    async (data: EditProfileData) => {
      const { city, state, country } = data;

      await api.put('/users/adress', {
        city,
        state,
        country,
      });

      user.address.city = city;
      user.address.state = state;
      user.address.country = country;
      setEnableEditPerfil(false);
      updateUser(user);
    },
    [user, updateUser],
  );

  const handleEditExtraInformation = useCallback(
    async (data: EditextraInformationsData) => {
      const { is_public, amount_value } = data;

      await api.put('/profile', {
        is_public,
        amount_value,
      });

      setEnableEditPerfil(false);
      updateUser(user);
    },
    [user, updateUser],
  );

  return (
    <>


      <Container>
        <Cover>
          <FiCamera />
        </Cover>
        <RightBox>
          <Avatar>

            <img src="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/136055153_3844327295618506_1204292927982679153_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=2Zrm17vwFiEAX_y4fmK&_nc_oc=AQkpNsTGhT1ZlQx-KW6ZWvjesRMlQoy-4KnXPb2GI0l98Jcv_7UjlseNkY_asRM-Q34&_nc_ht=scontent.faly3-1.fna&oh=37be2f86b005a82f15994cc236f334f8&oe=6022AD14" alt="" />
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="svgloading"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleChangeAvatar} />
            </label>
          </Avatar>

          <Info>

            {!enableEditPerfil ? (
              <div className="userName">
                <h1>{user.name}</h1>

                {user.address ? (
                  <h6>
                    {user.address?.city}, {user.address?.state},{' '}
                    {user.address?.country}
                  </h6>
                ) : (
                  <h6>Cidade, Estado, Pais</h6>
                )}

                <p onClick={() => setEnableEditPerfil(true)}>Editar</p>
              </div>
            ) : (
              <div className="editUser">
                <Form ref={formRef} onSubmit={handleEditProfile}>
                  <Input
                    name="public_name"
                    type="text"
                    placeholder="Nome publico"
                    icon={FaUser}
                  />
                  <Input
                    name="city"
                    type="text"
                    placeholder="Cidade"
                    icon={FaCity}
                  />
                  <Input
                    name="state"
                    type="text"
                    placeholder="Estado"
                    icon={FaMoneyBillAlt}
                  />
                  <Input
                    name="country"
                    type="text"
                    placeholder="Pais"
                    icon={GiWorld}
                  />
                  <div className="buttons">
                    <Button onClick={() => setEnableEditPerfil(false)}>
                      Cancelar
                    </Button>
                    <Button type="submit">Salvar</Button>
                  </div>
                </Form>
              </div>
            )}
          </Info>
          <Form ref={formRef} onSubmit={handleEditExtraInformation}>
            <Input
              name="amount_value"
              type="number"
              placeholder="Valor mensalidade R$"
              icon={FaMoneyBillAlt}
            />
            <Select
              icon={MdVisibility}
              label="Vísivel publicamente"
              options={[
                { key: 'Sim', value: 0 },
                { key: 'Não', value: 1 },
              ]}
              name="is_public"
            />
          </Form>
          <AboutMe>
            <header>
              <h2>Sobre mim</h2>

              <AboutMeModal />

            </header>
            <Bio>
              {enableEditBio ? (
                <textarea value={bio} onChange={e => setBio(e.target.value)} />
              ) : (
                <p>{user.bio}</p>
              )}
            </Bio>
          </AboutMe>
          <Skills>
            <h2>Habilidades</h2>
            <Tags>
              <Tag>emagrecimento</Tag>
              <Tag>hipertrofia</Tag>
              <Tag>aej</Tag>
            </Tags>
          </Skills>
        </RightBox>
      </Container>
    </>
  );
};

export default Me;
