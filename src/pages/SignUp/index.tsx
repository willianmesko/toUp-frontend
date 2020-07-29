import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { useToast } from '~/hooks/ToastContext';

import api from '~/services/api';
import getValidationErrors from '~/utils/getValidationErrors';

import logoImg from '~/assets/to-up2.png';

import Input from '~/components/Inputs/Text';

import Button from '~/components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  ContactTo,
  SexoInput,
} from './styles';

interface SignUpFormData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [typeProfile, setTypeProfile] = useState(0);
  const [sexo, setSexo] = useState(0);
  const { addToast } = useToast();

  const handleSubmit = async ({
    name,
    surname,
    email,
    password,
  }: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        surname: Yup.string().required('Sobrenome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(
          6,
          'Digite uma senha de no mínimo 6 dígitos',
        ),
      });

      await schema.validate(
        { name, surname, email, password },
        {
          abortEarly: false,
        },
      );

      if (typeProfile === 1) {
        await api.post('/users', { name, surname, email, password, sexo });
      }
      if (typeProfile === 0) {
        await api.post('/athletes/signup', {
          name,
          surname,
          email,
          password,
          sexo,
        });
      }
      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado! 🏋 ',
        description: 'Você já pode fazer seu logon no To Up!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
      });
    }
  };

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Go Barber" />
          <h1>Cadastre-se</h1>
          <ul>
            <li
              onClick={() => setTypeProfile(0)}
              className={typeProfile === 0 ? 'active' : 'desactive'}
            >
              Sou aluno
            </li>
            <li>
              <li
                onClick={() => setTypeProfile(1)}
                className={typeProfile === 1 ? 'active' : 'desactive'}
              >
                Sou Professor
              </li>
            </li>
          </ul>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" icon={FiUser} />
            <Input name="surname" placeholder="Sobrenome" icon={FiUser} />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              icon={FiMail}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />
            <SexoInput>
              <div>
                <input
                  type="radio"
                  checked={sexo === 0}
                  onChange={() => setSexo(0)}
                  value={sexo}
                />{' '}
                <label>Masculino</label>
              </div>
              <div>
                <input
                  type="radio"
                  checked={sexo === 1}
                  onChange={() => setSexo(1)}
                  value={sexo}
                />{' '}
                <label>Feminino</label>
              </div>
            </SexoInput>
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para Logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
