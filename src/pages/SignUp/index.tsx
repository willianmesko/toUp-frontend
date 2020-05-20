import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as Yup from 'yup';
import { useToast } from '~/hooks/ToastContext';

import api from '~/services/api';
import getValidationErrors from '~/utils/getValidationErrors';

import logoImg from '~/assets/TO-UP.png';

import Input from '~/components/Inputs/Text';
import InputRadio from '~/components/Inputs/Radio';
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
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
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

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado! ✂️',
          description: 'Você já pode fazer seu logon no GoBarber!',
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
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Go Barber" />
          <h1>Faça seu cadastro</h1>
          <Tabs>
            <TabList>
              <Tab
                className={activeTab === 0 ? 'activeTab' : 'defaultTab'}
                onClick={() => setActiveTab(0)}
              >
                Professor
              </Tab>
              <Tab
                className={activeTab === 1 ? 'activeTab' : 'defaultTab'}
                onClick={() => setActiveTab(1)}
              >
                Aluno
              </Tab>
            </TabList>
            <TabPanel>
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
                    <InputRadio name="masculine" /> <label>Masculino</label>
                  </div>
                  <div>
                    <InputRadio name="femenine" /> <label>Femenino</label>
                  </div>
                </SexoInput>
                <Button type="submit">Cadastrar</Button>
              </Form>
            </TabPanel>
            <TabPanel>
              <ContactTo>
                <h3>Para fazer o cadastro fale com !</h3>
              </ContactTo>
            </TabPanel>
          </Tabs>
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
