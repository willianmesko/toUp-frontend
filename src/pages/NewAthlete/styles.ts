import styled from 'styled-components';
import { lighten, shade } from 'polished';

export const Container = styled.div`
  margin: 20px auto;
  display: flex;
`;

export const Content = styled.div`
  display: flex;

  color: #000;

  align-items: center;
  align-content: center;
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
export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;

  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #75a3bb;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      color: #312e38;
      height: 20px;
      width: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#75a3bb')};
    }
  }
`;
