import styled from 'styled-components';
import background from '~/assets/icons/adipometro.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const EvaluationCard = styled.div`
  background: #fff;
  width: 45%;
  opacity: 0.7;
  height: 200px;
  cursor: pointer;
  border-radius: 6px;
  margin-left: 15px;
  border-left: 8px solid rgb(42, 159, 255);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 170px;
  background-position-x: 100%;
  background-position-y: 100%;
`;

export const Filter = styled.div``;
