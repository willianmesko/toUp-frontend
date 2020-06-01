import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 0px auto;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;

  align-items: center;

  justify-content: center;

  form {
    margin: 20px 0;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      align-self: center;
    }
    > div {
      grid-gap: 10px;
      display: grid;
      grid-template-columns: repeat(2, auto);
    }

    h1 {
      font-size: 20px;
      text-align: center;
    }

    a {
      color: #000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#000')};
      }
    }
  }

  img {
    background: transparent;
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }
`;

export const SexoInput = styled.div`
  display: flex;
  padding-top: 10px;
  color: #000;
  align-content: center;
  justify-content: space-around;
`;
