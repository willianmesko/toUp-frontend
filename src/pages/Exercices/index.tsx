import React, { useState, useEffect } from 'react';
import { Container, ExerciceCard, SearchField } from './styles';
import { GrAddCircle } from 'react-icons/gr';
import api from '~/services/api';

const Exercices = () => {
  const [exercices, setExercices] = useState([]);

  useEffect(() => {
    async function getExercices() {
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
          <GrAddCircle size={40} color="#87868B" />
        </span>
      </SearchField>
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
