import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Switch from '@material-ui/core/Switch';
import api from '../../services/api';
import { useToast } from '~/hooks/ToastContext';
import { useAuth } from '~/hooks/AuthContext';
import User from '~/interfaces/userInterface';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  AiFillEdit,
  AiFillInstagram,
  AiFillMail,
  AiFillSave,
} from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { Editor } from 'react-draft-wysiwyg';
import { FiCamera } from 'react-icons/fi';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
  Container,
  Cover,
  Profile,
  LeftBox,
  RightBox,
  AboutMe,
  Skills,
  Avatar,
  MemberSince,
  Info,
  Bio,
  Tags,
  Tag,
  Medias,
  LinkPerfil,
} from './styles';

const Me: React.FC = () => {
  const [state, setState] = useState(true);
  const { user, updateUser } = useAuth();
  const { addToast } = useToast();
  const [editorState, setEditorState] = useState();
  const [enableEditBio, setEnableEditBio] = useState(false);
  const [enableEditPerfil, setEnableEditPerfil] = useState(false);

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

  async function editUserAdress(): Promise<User> {
    setEnableEditPerfil(false);

    const response = await api.put('/users/adress', {
      city: 'Porto Alegre2',
      state: 'RS2',
      country: 'BR2',
    });

    user.address.city = 'Porto alegre2';
    user.address.state = 'RS2';
    user.address.country = 'BR2';

    updateUser(user);

    return user;
  }
  return (
    <>
      <Cover>a</Cover>
      {console.log(user.address)}
      <Container>
        {/* <LeftBox>
          <Profile>
            <span>
              {enableEditPerfil ? (
                <AiFillSave size={20} onClick={() => editUserAdress()} />
              ) : (
                <AiFillEdit
                  size={20}
                  onClick={() => setEnableEditPerfil(true)}
                />
              )}
            </span>
            <Avatar>
              <img
                loading="lazy"
                src="https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.0-9/116793868_3401975769853663_97784688088945879_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=bTtYiEapZdoAX8Rj7pf&_nc_ht=scontent.fpoa13-1.fna&oh=7b703c5d9c3d69366a49c12e1816e252&oe=5F95E47D"
                alt="profile"
              />

              <label htmlFor="avatar">
                <FiCamera />
                <input type="file" id="avatar" onChange={handleChangeAvatar} />
              </label>
            </Avatar>
            <Info>
              {enableEditPerfil ? (
                <>
                  <input placeholder="Nome" />
                  <div className="adress">
                    <HiLocationMarker />
                    <input placeholder="Cidade"></input>
                    <input placeholder="Estado"></input>
                    <input placeholder="Pais"></input>
                  </div>
                </>
              ) : (
                <>
                  <h3>{user.name}</h3>
                  <div className="adress">
                    <HiLocationMarker />
                    <h6>
                      {user.address?.city}, {user.address?.state},
                      {user.address?.country}
                    </h6>
                  </div>

                  <Medias>
                    <AiFillInstagram size={30} />

                    <AiFillMail size={30} />
                  </Medias>
                </>
              )}
            </Info>
            <MemberSince>MEMBRO DESDE AGOSTO, 2020</MemberSince>
          </Profile>
          <LinkPerfil>
            <p>Link perfil</p>
            <input value="willian.mesko" />
          </LinkPerfil>
        </LeftBox> */}
        <RightBox>
          {/* <InputLabel htmlFor="input-with-icon-adornment">
            Valor da mensalidade
          </InputLabel>
          <Input
            type="number"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            }
          />

          <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Vsivel publicamente"
            labelPlacement="top"
          /> */}
          <AboutMe>
            <header>
              <h2>Sobre mim</h2>
              {enableEditBio ? (
                <AiFillSave size={20} onClick={() => setEnableEditBio(false)} />
              ) : (
                <AiFillEdit size={20} onClick={() => setEnableEditBio(true)} />
              )}
            </header>
            <Bio>
              {enableEditBio ? (
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={editorState =>
                    setEditorState(editorState)
                  }
                />
              ) : (
                <p>vou atualiza</p>
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
