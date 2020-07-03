import React, { useCallback, useRef } from 'react';
import moment from 'moment';
import { FiMail, FiUser } from 'react-icons/fi';
import {
  GiWeight,
  GiBodyHeight,
  GiRun,
  GiWeightLiftingUp,
  GiWeightLiftingDown,
  GiStairsGoal,
} from 'react-icons/gi';
import { FaBirthdayCake } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import { useToast } from '~/hooks/ToastContext';
import 'react-datepicker/dist/react-datepicker.css';
import api from '~/services/api';
import getValidationErrors from '~/utils/getValidationErrors';

import Input from '~/components/Inputs/Text';
import Select from '~/components/Inputs/Select';

import { useAthlete } from '~/hooks/AthleteContext';
import Button from '~/components/Button';

import { Container, Content, AvatarInput } from './styles';

interface NewAthleteFormData {
  name: string;
  email: string;
  body_mass: number;
  stature: number;
  date_of_birth: string;
  physical_activity: number;
  objective: number;
  aerobic_profile: number;
  training_level: number;
  avatar?: string;
  sexo: number;
}

const NewAthlete: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { setAthlete } = useAthlete();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async ({
      name,
      email,
      body_mass,
      sexo,
      stature,
      date_of_birth,
      physical_activity,
      objective,
      aerobic_profile,
      training_level,
      avatar,
    }: NewAthleteFormData) => {
      try {
        const dateFormated = moment(date_of_birth, 'DD/MM/YYYY').format(
          'YYYY-MM-DD[T]HH:mm:ss',
        );
        const start = moment(dateFormated).format('YYYY-MM-DD');

        const age: number = Math.trunc(
          moment.duration(moment(new Date()).diff(start)).asYears(),
        );

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          body_mass: Yup.number().required('Campo obrigatório'),
          stature: Yup.number().required('Campo obrigatório'),
          sexo: Yup.number().required('Campo obrigatório'),
          date_of_birth: Yup.string().required('Campo obrigatório'),
          physical_activity: Yup.number().required('Campo obrigatório'),
          objective: Yup.number().required('Campo obrigatório'),
          aerobic_profile: Yup.number().required('Campo obrigatório'),
          training_level: Yup.number().required('Campo obrigatório'),
        });

        await schema.validate(
          {
            name,
            email,
            age,
            sexo,
            body_mass,
            stature,
            date_of_birth,
            physical_activity,
            objective,
            aerobic_profile,
            training_level,
          },
          {
            abortEarly: false,
          },
        );

        const response = await api.post('/athletes', {
          name,
          email,
          age,
          sexo,
          body_mass,
          stature,

          physical_activity,
          objective,
          aerobic_profile,
          training_level,
        });

        addToast({
          type: 'success',
          title: 'Cadastro realizado! 🏋 ',
          description: 'Aluno cadastrado com sucesso!',
        });

        setAthlete(response.data);
        setTimeout(() => history.push('/perfil-athlete'), [1000]);
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
      <Content>
        {/* <AvatarInput>
          <img
            src={
              'https://yt3.ggpht.com/a-/AOh14GjDM_FdVyl5v7gQrGyIgjf770GJBujpn9Q3LLI2cTI=s88-c-k-c0xffffffff-no-rj-mo'
            }
            alt="{user.name}"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={() => {}} />
          </label>
        </AvatarInput> */}
        <div>
          <h1>Cadastre um novo aluno</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Input name="name" icon={FiUser} placeholder="Nome Completo" />
              <Input name="email" icon={FiMail} placeholder="Email" />
              <Input
                name="body_mass"
                icon={GiWeight}
                type="number"
                placeholder="Peso em kg"
              />
              <Input
                name="stature"
                icon={GiBodyHeight}
                type="number"
                placeholder="Altura em cm"
              />
              <InputMask maskPlaceholder="Data de nascimento" mask="99/99/9999">
                {inputProps => (
                  <Input
                    name="date_of_birth"
                    icon={FaBirthdayCake}
                    placeholder="Data de nascimento"
                  />
                )}
              </InputMask>

              <Select
                icon={GiRun}
                label="Perfil Aeróbico"
                options={[
                  { key: 'Destreinado', value: 1 },
                  { key: 'Treinado', value: 2 },
                  { key: 'Atleta', value: 3 },
                  { key: 'Obeso', value: 4 },
                  { key: 'Cardiopata', value: 5 },
                  { key: 'Hipertenso', value: 6 },
                  { key: 'Diabético', value: 7 },
                ]}
                name="aerobic_profile"
              />
              <Select
                label="Nível Musculação"
                icon={GiWeightLiftingUp}
                options={[
                  { key: 'Iniciante', value: 1 },
                  { key: 'Intermediário', value: 2 },
                  { key: 'Avançado', value: 3 },
                ]}
                name="training_level"
              />
              <Select
                icon={GiWeightLiftingDown}
                label="Atividade Fisica"
                options={[
                  { key: 'Inativo Fisicamente', value: 1 },
                  { key: 'Moderatamente', value: 2 },
                  { key: 'Ativo Fisicamente', value: 3 },
                ]}
                name="physical_activity"
              />
              <Select
                label="Objetivo"
                icon={GiStairsGoal}
                options={[
                  { key: 'Emagrecimento', value: 1 },
                  { key: 'Hipertrofia', value: 2 },
                ]}
                name="objective"
              />
              <Select
                label="Genero"
                icon={GiStairsGoal}
                options={[
                  { key: 'Masculino', value: 0 },
                  { key: 'Feminino', value: 1 },
                ]}
                name="sexo"
              />
              {/* <SexoInput>
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
              </SexoInput> */}
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </div>
      </Content>
    </Container>
  );
};

export default NewAthlete;