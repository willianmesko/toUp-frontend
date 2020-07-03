import React, { useCallback, useRef } from 'react';

import { MdTitle, MdDescription } from 'react-icons/md';
import { GiStairsGoal, GiCycle } from 'react-icons/gi';
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
  cycle: number;
  objective: number;
}

const NewTraining: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { setTraining } = useTraining();

  const handleSubmit = useCallback(
    async ({ title, description, cycle, objective }: NewTrainingFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Campo obrigatório'),
          description: Yup.string(),
          cycle: Yup.number(),
          objective: Yup.number(),
        });

        await schema.validate(
          {
            title,
            description,
            cycle,
            objective,
          },
          {
            abortEarly: false,
          },
        );

        const response = await api.post('/training', {
          title,
          description,
          cycle,
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
      {/* <Cover /> */}
      <Content>
        <TrainingArea>
          <h1>Cadastre um novo treino</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <div id="title">
                <Input name="title" icon={MdTitle} placeholder="Titulo" />
              </div>
              <div id="cycle">
                <Select
                  label="Ciclo"
                  icon={GiCycle}
                  options={[
                    { key: 'Nenhum', value: 0 },
                    { key: 'A B', value: 2 },
                    { key: 'A B C', value: 3 },
                    { key: 'A B C D', value: 4 },
                    { key: 'A B C D E', value: 5 },
                    { key: 'A B C D E F', value: 6 },
                  ]}
                  name="cycle"
                />
              </div>
              <div id="objective">
                <Select
                  label="Objetivo"
                  icon={GiStairsGoal}
                  options={[
                    { key: 'Hipertrofia', value: 1 },
                    { key: 'Emagrecimento', value: 2 },
                    { key: 'Resistencia', value: 3 },
                  ]}
                  name="objective"
                />
              </div>
              <div id="description">
                <Input
                  name="description"
                  icon={MdDescription}
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
