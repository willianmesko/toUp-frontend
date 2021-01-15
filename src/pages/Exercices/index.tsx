import React, { useState, useEffect } from 'react';
import {
  Container,
  ExerciceCard,
  SearchField,
} from './styles';
import CreateExercice from '~/pages/TrainingInfo/CreateExercice';
import api from '~/services/api';
import { GiDuration } from 'react-icons/gi';
import { FaWeight } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';

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
        <input placeholder="Pesquisar" />
        <select>
          <option>Bicps</option>
          <option>Tricps</option>
        </select>

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
            return <ExerciceCard>
              <div className="thumbnail">
                <img src='https://img.youtube.com/vi/edTQcwjf5lk/hqdefault.jpg' />
              </div>
              <div className="exerciceInfo">
                <div className="exerciceAbout">
                  <h4>{exercice.name}</h4>
                  <p>Músculo: {exercice.muscle_group_name}</p>
                </div>
                <div className="exerciceExtraInfo">
                  <span>
                    <MdRemoveRedEye size={22} />
                    Ver
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

            </ExerciceCard>;
          })}
      </Container>
    </>
  );
};

export default Exercices;
