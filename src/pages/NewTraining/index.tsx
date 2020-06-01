import React, { useCallback, useRef } from 'react';

import { FiUser } from 'react-icons/fi';
import { GiStairsGoal } from 'react-icons/gi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { useToast } from '~/hooks/ToastContext';
import 'react-datepicker/dist/react-datepicker.css';
import api from '~/services/api';
import getValidationErrors from '~/utils/getValidationErrors';
import { useTraining } from '~/hooks/TrainingContext';
import Input from '~/components/Inputs/Text';
import Select from '~/components/Inputs/Select';

import Button from '~/components/Button';

import { Container, Cover, Content, TrainingArea, RoutineArea } from './styles';

interface NewTrainingFormData {
  title: string;
  description: string;
  difficulty: number;
  objective: number;
}

const NewTraining: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { setTraining } = useTraining();

  const handleSubmit = useCallback(
    async ({
      title,
      description,
      difficulty,
      objective,
    }: NewTrainingFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Campo obrigatório'),
          description: Yup.string(),
          difficulty: Yup.number(),
          objective: Yup.number(),
        });

        await schema.validate(
          {
            title,
            description,
            difficulty,
            objective,
          },
          {
            abortEarly: false,
          },
        );

        const response = await api.post('/training', {
          title,
          description,
          difficulty,
          objective,
        });

        setTraining(response.data);
        setTimeout(() => history.push(`/training-info/${response.data.id}`), [
          1000,
        ]);
        addToast({
          type: 'success',
          title: 'Cadastro realizado! 🏋 ',
          description: 'Aluno cadastrado com sucesso!',
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
      <Cover></Cover>
      <Content>
        <TrainingArea>
          <h1>Cadastre um novo treino</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <div id="title">
                <Input name="title" icon={FiUser} placeholder="Titulo" />
              </div>
              <div id="difficulty">
                <Select
                  label="Dificuldade"
                  icon={GiStairsGoal}
                  options={[
                    { key: 'Emagrecimento', value: 1 },
                    { key: 'Hipertrofia', value: 2 },
                  ]}
                  name="difficulty"
                />
              </div>
              <div id="objective">
                <Select
                  label="Objetivo"
                  icon={GiStairsGoal}
                  options={[
                    { key: 'Iniciante', value: 1 },
                    { key: 'Intermediário', value: 2 },
                    { key: 'Avançado', value: 3 },
                  ]}
                  name="difficulty"
                />
              </div>
              <div id="description">
                <Input
                  name="description"
                  icon={FiUser}
                  placeholder="Descrição"
                />
              </div>
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </TrainingArea>
        <RoutineArea></RoutineArea>
      </Content>
    </Container>
  );
};

export default NewTraining;
