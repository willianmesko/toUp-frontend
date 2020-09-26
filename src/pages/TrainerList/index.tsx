import React, { useState, useEffect } from 'react';
import {
  Container,
  TrainerContainer,
  Trainer,
  PerfilArea,
  ContractArea,
  Info,
  Description,
  Tags,
  Filters,
} from './styles';

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
      <TrainerContainer>
        <Trainer>
          <PerfilArea>
            <Info>
              <img src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498" />
              <div>
                Karine M<p>Agilidade e Eficiência!</p>
              </div>
            </Info>
            <Description>
              Sou proativa, objetiva, determinada, que sabe focar no que
              realmente importa, que adora desafios e que se compromete a
              finalizar qualquer projeto ou atividade que por ventura venha a se
              envolver. Meu lema é "Não existe obstáculos quando há Foco, Força
              e Fé".
            </Description>

            <Tags>
              <ul>
                <li>Hipertrofia</li>
                <li>Emagrencimento</li>
                <li>Aej</li>
              </ul>
            </Tags>
          </PerfilArea>

          <ContractArea>
            <button>Contrate</button>
            <small>Mensalidade:</small>
            <p>R$ 50.00</p>

            <small>Alunos ativos:10</small>

            <small>Registrado desde: 1 mês</small>
          </ContractArea>
        </Trainer>
        <Trainer>
          <PerfilArea>
            <Info>
              <img src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498" />
              <div>
                Karine M<p>Agilidade e Eficiência!</p>
              </div>
            </Info>
            <Description>
              Sou proativa, objetiva, determinada, que sabe focar no que
              realmente importa, que adora desafios e que se compromete a
              finalizar qualquer projeto ou atividade que por ventura venha a se
              envolver. Meu lema é "Não existe obstáculos quando há Foco, Força
              e Fé".
            </Description>

            <Tags>
              <ul>
                <li>Hipertrofia</li>
                <li>Emagrencimento</li>
                <li>Aej</li>
              </ul>
            </Tags>
          </PerfilArea>

          <ContractArea>
            <button>Contrate</button>
            <small>Mensalidade:</small>
            <p>R$ 50.00</p>

            <small>Alunos ativos:10</small>

            <small>Registrado desde: 1 mês</small>
          </ContractArea>
        </Trainer>
        <Trainer>
          <PerfilArea>
            <Info>
              <img src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498" />
              <div>
                Karine M<p>Agilidade e Eficiência!</p>
              </div>
            </Info>
            <Description>
              Sou proativa, objetiva, determinada, que sabe focar no que
              realmente importa, que adora desafios e que se compromete a
              finalizar qualquer projeto ou atividade que por ventura venha a se
              envolver. Meu lema é "Não existe obstáculos quando há Foco, Força
              e Fé".
            </Description>

            <Tags>
              <ul>
                <li>Hipertrofia</li>
                <li>Emagrencimento</li>
                <li>Aej</li>
              </ul>
            </Tags>
          </PerfilArea>

          <ContractArea>
            <button>Contrate</button>
            <small>Mensalidade:</small>
            <p>R$ 50.00</p>

            <small>Alunos ativos:10</small>

            <small>Registrado desde: 1 mês</small>
          </ContractArea>
        </Trainer>
        <Trainer>
          <PerfilArea>
            <Info>
              <img src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498" />
              <div>
                Karine M<p>Agilidade e Eficiência!</p>
              </div>
            </Info>
            <Description>
              Sou proativa, objetiva, determinada, que sabe focar no que
              realmente importa, que adora desafios e que se compromete a
              finalizar qualquer projeto ou atividade que por ventura venha a se
              envolver. Meu lema é "Não existe obstáculos quando há Foco, Força
              e Fé".
            </Description>

            <Tags>
              <ul>
                <li>Hipertrofia</li>
                <li>Emagrencimento</li>
                <li>Aej</li>
              </ul>
            </Tags>
          </PerfilArea>

          <ContractArea>
            <button>Contrate</button>
            <small>Mensalidade:</small>
            <p>R$ 50.00</p>

            <small>Alunos ativos:10</small>

            <small>Registrado desde: 1 mês</small>
          </ContractArea>
        </Trainer>
        <Trainer>
          <PerfilArea>
            <Info>
              <img src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498" />
              <div>
                Karine M<p>Agilidade e Eficiência!</p>
              </div>
            </Info>
            <Description>
              Sou proativa, objetiva, determinada, que sabe focar no que
              realmente importa, que adora desafios e que se compromete a
              finalizar qualquer projeto ou atividade que por ventura venha a se
              envolver. Meu lema é "Não existe obstáculos quando há Foco, Força
              e Fé".
            </Description>

            <Tags>
              <ul>
                <li>Hipertrofia</li>
                <li>Emagrencimento</li>
                <li>Aej</li>
              </ul>
            </Tags>
          </PerfilArea>

          <ContractArea>
            <button>Contrate</button>
            <small>Mensalidade:</small>
            <p>R$ 50.00</p>

            <small>Alunos ativos:10</small>

            <small>Registrado desde: 1 mês</small>
          </ContractArea>
        </Trainer>
        <Trainer>
          <PerfilArea>
            <Info>
              <img src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498" />
              <div>
                Karine M<p>Agilidade e Eficiência!</p>
              </div>
            </Info>
            <Description>
              Sou proativa, objetiva, determinada, que sabe focar no que
              realmente importa, que adora desafios e que se compromete a
              finalizar qualquer projeto ou atividade que por ventura venha a se
              envolver. Meu lema é "Não existe obstáculos quando há Foco, Força
              e Fé".
            </Description>

            <Tags>
              <ul>
                <li>Hipertrofia</li>
                <li>Emagrencimento</li>
                <li>Aej</li>
              </ul>
            </Tags>
          </PerfilArea>

          <ContractArea>
            <button>Contrate</button>
            <small>Mensalidade:</small>
            <p>R$ 50.00</p>

            <small>Alunos ativos:10</small>

            <small>Registrado desde: 1 mês</small>
          </ContractArea>
        </Trainer>
      </TrainerContainer>

      <Filters>filtros</Filters>
    </Container>
  );
};

export default TrainerList;
