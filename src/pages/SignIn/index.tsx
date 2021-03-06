import React, { useRef, useCallback, useState } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import getValidationErrors from '~/utils/getValidationErrors';

import { useAuth } from '~/hooks/AuthContext';
import { useToast } from '~/hooks/ToastContext';

import Input from '~/components/Inputs/Text';
import Button from '~/components/Button';

import logoImg from '~/assets/to-up2.png';

import { Container, Content, AnimationContainer } from './styles';
import Loading from '~/components/Loading';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true)
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        setLoading(false)
        // history.push('/dashboard');
      } catch (err) {
        setLoading(false)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <>
      { loading && <Loading />}
      <Container>

        <Content>
          <AnimationContainer>
            <img src={logoImg} alt="To Up" />

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h2>Entre em sua conta</h2>

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

              <Button type="submit">Entrar</Button>

              <a href="forgot">Esqueci minha senha</a>
            </Form>

            <Link to="signup">
              <FiLogIn />
            Não tem uma conta? Registre-se
          </Link>
          </AnimationContainer>
        </Content>
        {/* <Background /> */}
      </Container>
    </>
  );

};

export default SignIn;
