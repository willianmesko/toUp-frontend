import React, { useState, useEffect } from 'react';
import {
  Container,
  ExerciceCard,
  SearchField,
} from './styles';
import CreateExercice from '~/pages/TrainingInfo/CreateExercice';
import api from '~/services/api';

const Exercices = () => {
  const [exercices, setExercices] = useState([]);

  useEffect(() => {
    async function getExercices(): Promise<void> {
      const response = await api.get('/exercices');
      setExercices(response.data);
    }
    getExercices();
  }, []);
  return (
    <>
      <h1>Exercicios</h1>
      <hr />
      <SearchField>
        <input placeholder="buscar" />

        <span>
          <CreateExercice addExercice={setExercices} />
        </span>
      </SearchField>
      {/* <GroupMuscleFilter>
        <GroupMuscle>
          <img src={bicps} />
          <small>Biceps</small>
        </GroupMuscle>
        <GroupMuscle>
          <img src={tricps} />
          <small>Tricpes</small>
        </GroupMuscle>

        <GroupMuscle>
          <img src={abdomen} />
          <small>Abdomen</small>
        </GroupMuscle>
        <GroupMuscle>
          <img src={leg} />
          <small>Perna</small>
        </GroupMuscle>
        <GroupMuscle>
          <img src={costas} />
          <small>Dorsal</small>
        </GroupMuscle>
      </GroupMuscleFilter> */}
      <Container>
        {exercices &&
          exercices.map((exercice, index) => {
            return <ExerciceCard> {exercice.name} </ExerciceCard>;
          })}
      </Container>
    </>
  );
};

export default Exercices;
