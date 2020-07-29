import React, { useState, useEffect } from 'react';
import { Container, TrainerContainer, Trainer } from './styles';

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
    <Container>
      <h1>Contrate um treinador</h1>
      <TrainerContainer>
        {trainer &&
          trainer.map(traine => {
            return (
              <Trainer>
                <img src="https://avatars3.githubusercontent.com/u/26778884?s=400&u=2f9ad4f573a416acac5e71ccfbaf087ce6ded96b&v=4" />
                <footer>
                  <strong>{traine.name}</strong> <span>****</span>
                  <p>Treinador com 2 anos no mercado</p>
                </footer>

                {/* <div className="buttons">
                  <button type="button">
                    <img alt="Dislike" />
                  </button>
                  <button type="button">
                    <img alt="Like" />
                  </button>
                </div> */}
              </Trainer>
            );
          })}
      </TrainerContainer>
    </Container>
  );
};

export default TrainerList;
