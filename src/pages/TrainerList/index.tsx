import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import './styles.css';
import api from '~/services/api';
const TrainerList = () => {
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    async function getExercices() {
      const response = await api.get('/users');
      setTrainer(response.data);
    }
    getExercices();
  }, []);
  return (
    <>
      <div className="main-container">
        <ul>
          {trainer &&
            trainer.map(traine => {
              return (
                <li>
                  <img src="https://avatars3.githubusercontent.com/u/26778884?s=400&u=2f9ad4f573a416acac5e71ccfbaf087ce6ded96b&v=4" />
                  <footer>
                    <strong>{traine.name}</strong> <span>user</span>
                    <p>bio</p>
                  </footer>

                  <div className="buttons">
                    <button type="button">
                      <img alt="Dislike" />
                    </button>
                    <button type="button">
                      <img alt="Like" />
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default TrainerList;
