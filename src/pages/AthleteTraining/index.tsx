import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {
  Container,
  Content,
  WorkoutArea,
  Routine,
  ExerciceArea,
  Exercice,
  RoutineArea,
  TrainerAvatar,
  WorkoutInfo,
  ExerciceInfo,
} from './styles';

const AthleteTraining = () => {
  return (
    <Container>
      <WorkoutInfo>
        <TrainerAvatar />

          <p>Treinador: willian mesko </p>



      </WorkoutInfo>

      <Content>
        <WorkoutArea>

          <RoutineArea>
            <AiOutlineLeft size={40} />
            <Routine>
              {/* <Letter> A </Letter> */}
              <h2>Bicps</h2>

              <ul>
                <li>Gasto calorico</li>
                <li>Volume total</li>
              </ul>
              <ul>
                <li>Gasto calorico2</li>
                <li>Volume total2</li>
              </ul>
            </Routine>
            <AiOutlineRight size={40} />
          </RoutineArea>

          <hr />
          <ExerciceArea>
            <Exercice>
              <p>Legpress</p>
              <table>
                <thead>
                  <tr>
                    <td>Séries</td>
                    <td>Repitições</td>
                    <td>Carga</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>40</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </Exercice>
            <Exercice>1</Exercice>
            <Exercice>3</Exercice>
            <Exercice>1</Exercice>
            <Exercice>1</Exercice>
            <Exercice>3</Exercice>
          </ExerciceArea>
        </WorkoutArea>
        {/*
        <TrainerArea>
          <TraineCard>
            <img src="https://avatars3.githubusercontent.com/u/26778884?s=400&u=2f9ad4f573a416acac5e71ccfbaf087ce6ded96b&v=4" />
            <p>Goku</p>
          </TraineCard>
        </TrainerArea> */}
      </Content>
      <ExerciceInfo></ExerciceInfo>
    </Container>
  );
};

export default AthleteTraining;
