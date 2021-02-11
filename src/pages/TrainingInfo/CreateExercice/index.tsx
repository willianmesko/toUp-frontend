import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { GiDuration } from 'react-icons/gi';
import { FiYoutube, FiUser } from 'react-icons/fi';
import { FaWeight } from 'react-icons/fa';
import * as Yup from 'yup';
import Input from '~/components/Inputs/Text';
import Select from '~/components/Inputs/Select';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useToast } from '~/hooks/ToastContext';
import Button from '~/components/Button';

import getValidationErrors from '~/utils/getValidationErrors';
import api from '~/services/api';

interface ExerciceInterface {
  name: string;
  group_muscle_id: number;
  group_muscle_name: string;
  youtube_video_id?: string;
}

interface ExerciceFormData {
  name: string;
  muscle_group_id?: string;
  calorie?: number;
  duration?: string;
  youtube_video_id?: string;
}
interface ExerciceInterface {
  id: string;
  name: string;
  group_muscle_id: number;
  group_muscle_name: string;
  youtube_video_id?: string;
  state?: any[];
}
interface ModalProps {
  addExercice(exercice: any): void;
  children?: React.ReactNode;
  exercices?: any[];
}

const CreateExercice: React.FC<ModalProps> = props => {
  const [modal, setModal] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const toggle = () => setModal(!modal);
  const { addExercice } = props;

  const { addToast } = useToast();
  const exercicesOptions = [
    { key: 'Bícepes', value: '1' },
    { key: 'Tríceps', value: '2' },
    { key: 'Perna', value: '3' },
    { key: 'Ombro', value: '4' },
    { key: 'Peitoral', value: '5' },
    { key: 'Costas', value: '6' },
    { key: 'Abdomen', value: '7' },
  ];



  const handleSubmitExercice =
    async ({
      name,
      muscle_group_id,
      youtube_video_id,
      calorie,
      duration,
    }: ExerciceFormData) => {
      try {
        const muscle_group_name = exercicesOptions.find(
          exercice => exercice.value === muscle_group_id,
        );


        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório'),
          muscle_group_id: Yup.string().required('Campo obrigatório'),
          youtube_video_id: Yup.string(),
        });

        await schema.validate(
          {
            name,
            muscle_group_id,

            youtube_video_id,
          },
          {
            abortEarly: false,
          },
        );

        const response = await api.post('/exercices', {
          name,
          muscle_group_id,
          youtube_video_id,
          calorie,
          duration,
          muscle_group_name: muscle_group_name.key,
        });

        console.log(response)

        addExercice(state => [...state, response.data]);

        setModal(false);

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
    }




  return (
    <div>

      <Button onClick={toggle} height="35px" width="130px">+ Exercicio</Button>
      <Modal centered isOpen={modal} toggle={toggle}>
        <ModalHeader>Novo Exercício</ModalHeader>
        <ModalBody>
          {' '}
          <Form ref={formRef} onSubmit={handleSubmitExercice}>
            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Select
              label="Grupo Muscular"
              name="muscle_group_id"
              options={exercicesOptions}
              icon={FiUser}
            />
            <Input
              name="youtube_video_id"
              icon={FiYoutube}
              placeholder="Youtube Video"
            />
            <Input
              name="calorie"
              icon={FaWeight}
              placeholder="Gasto calórico"
            />
            <Input name="duration" icon={GiDuration} placeholder="Duraçao" />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateExercice;
