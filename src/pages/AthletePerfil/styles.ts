import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  min-height: 500px;
  max-height: 10000px;
  border-radius: 4px;
`;

export const Cards = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, auto);

  grid-gap: 20px;
  list-style: none;
`;

export const Card = styled.li`
  cursor: pointer;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.5s ease;

  &:hover {
      transform:
      box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
      -webkit-transform: translateX(-3px);
      transform: scale(1.1);
      border: 2px solid #000;

    }
`;
