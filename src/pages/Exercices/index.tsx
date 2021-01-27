import React, { useState, useEffect } from 'react';
import {
  ExercicesArea,
  ExerciceCard,
  SearchField,
  Container
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
    <Container>


      <SearchField>
        <h2>Execícicos</h2>
        <div>
          <input placeholder="Pesquisar" />
          <select>
            <option>Bicps</option>
            <option>Tricps</option>
          </select>
          <CreateExercice addExercice={setExercices} />

        </div>

      </SearchField>
      <ExercicesArea>
        {exercices &&
          exercices.map((exercice, index) => {
            return <ExerciceCard>
              <div className="thumbnail">
                <img alt="exerciced" src='https://img.youtube.com/vi/edTQcwjf5lk/hqdefault.jpg' />
              </div>
              <div className="exerciceInfo">
                <div className="exerciceAbout">
                  <h4>{exercice.name}</h4>
                  <p>Músculo: {exercice.muscle_group_name}</p>
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

            </ExerciceCard>;
          })}
      </ExercicesArea>
    </Container>
  );
};

export default Exercices;
