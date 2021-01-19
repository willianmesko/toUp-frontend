import React, { useState, useRef, useEffect } from 'react';
import api from '~/services/api';
import {Container,WorkoutAbout, RoutineContent,WorkoutContent,ExercicesContent,Routines, Routine} from './styles';
import ModalContainer from '~/components/ModalContainer';
import Button from '~/components/Button';
import Input from '~/components/Inputs/Text';
import CreateExercice from '~/pages/TrainingInfo/CreateExercice';
import { FiUser, FiEdit3, FiSave } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {ExerciceCard} from '~/pages/Exercices/styles'
import { GiDuration } from 'react-icons/gi';
import { FaWeight } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';
import * as Yup from 'yup';
import getValidationErrors from '~/utils/getValidationErrors';
interface RoutineFormData {
  title: string;
  description: string;
}

const Workout: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [openModal, setOpenModal] = useState(false);





  async function handleSubmitRoutine({
    title,
    description,
  }: RoutineFormData): Promise<void> {
    try {
      formRef.current?.setErrors({});
      // if (routines.length >= 6) {
      //   // addToast({
      //   //   type: 'error',
      //   //   title: 'Erro no cadastro',
      //   //   description: 'No máximo 6 rotinas por treino',
      //   // });
      //   setOpenModal(false);
      //   return;
      // }
      const schema = Yup.object().shape({
        title: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(
        {
          title,
        },
        {
          abortEarly: false,
        },
      );

      const response = await api.post('/routines', {
        title,

        // training_id: training.id,
      });

      response.data.routineExercice = [];
      // setRoutines(state => [...state, response.data]);
      setOpenModal(false);

      // setStartStep(1);
      // setIsTourOpen(routines.length === 0 ? true : false);

      // addToast({
      //   type: 'success',
      //   title: 'Cadastro realizado! 🏋 ',
      //   description: 'Aluno cadastrado com sucesso!',
      // });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      // addToast({
      //   type: 'error',
      //   title: 'Erro no cadastro',
      //   description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
      // });
    }
  }



  return (
    <Container>

      <RoutineContent>

      <Routines>
        <Routine>
            Rotina 1
        </Routine>

        <Routine>
            Rotina 2
        </Routine>

        <Routine>
            Rotina 3
        </Routine>

      </Routines>
      </RoutineContent>
      <WorkoutContent>
      <WorkoutAbout>
        <h1>workout</h1>
        <ModalContainer
          setCloseModal={setOpenModal}
          opened={openModal}
          execute={() => false}
          buttonLabel="Criar Rotina"
          title="Rotina de exercícios"
        >
          <Form ref={formRef} onSubmit={handleSubmitRoutine}>
            <Input name="title" icon={FiUser} placeholder="Titulo" />

            <Button type="submit">Cadastrar</Button>
          </Form>


        </ModalContainer>
        <CreateExercice exercices={[]} addExercice={() => {}} />
      </WorkoutAbout>


      <ExercicesContent>
        <ExerciceCard>
        <div className="thumbnail">
                <img src='https://img.youtube.com/vi/edTQcwjf5lk/hqdefault.jpg' />
              </div>
              <div className="exerciceInfo">
                <div className="exerciceAbout">
                  <h4>name</h4>
                  <p>Músculo: </p>
                </div>
                <div className="exerciceExtraInfo">
                  <span>
                    <MdRemoveRedEye size={22} />

                  </span>
                  <span>
                    <FaWeight size={20} />
                   250cal
                  </span>
                  <span>
                    <GiDuration size={20} />
                   250cal</span>
                </div>
              </div>
        </ExerciceCard>
        <ExerciceCard>
        <div className="thumbnail">
                <img src='https://img.youtube.com/vi/edTQcwjf5lk/hqdefault.jpg' />
              </div>
              <div className="exerciceInfo">
                <div className="exerciceAbout">
                  <h4>name</h4>
                  <p>Músculo: </p>
                </div>
                <div className="exerciceExtraInfo">
                  <span>
                    <MdRemoveRedEye size={22} />

                  </span>
                  <span>
                    <FaWeight size={20} />
                   250cal
                  </span>
                  <span>
                    <GiDuration size={20} />
                   250cal</span>
                </div>
              </div>
        </ExerciceCard>
        <ExerciceCard>
        <div className="thumbnail">
                <img src='https://img.youtube.com/vi/edTQcwjf5lk/hqdefault.jpg' />
              </div>
              <div className="exerciceInfo">
                <div className="exerciceAbout">
                  <h4>name</h4>
                  <p>Músculo: </p>
                </div>
                <div className="exerciceExtraInfo">
                  <span>
                    <MdRemoveRedEye size={22} />

                  </span>
                  <span>
                    <FaWeight size={20} />
                   250cal
                  </span>
                  <span>
                    <GiDuration size={20} />
                   250cal</span>
                </div>
              </div>
        </ExerciceCard>
        <ExerciceCard>
        <div className="thumbnail">
                <img src='https://img.youtube.com/vi/edTQcwjf5lk/hqdefault.jpg' />
              </div>
              <div className="exerciceInfo">
                <div className="exerciceAbout">
                  <h4>name</h4>
                  <p>Músculo: </p>
                </div>
                <div className="exerciceExtraInfo">
                  <span>
                    <MdRemoveRedEye size={22} />

                  </span>
                  <span>
                    <FaWeight size={20} />
                   250cal
                  </span>
                  <span>
                    <GiDuration size={20} />
                   250cal</span>
                </div>
              </div>
        </ExerciceCard>
      </ExercicesContent>
      </WorkoutContent>

    </Container>
  )




};


export default Workout
