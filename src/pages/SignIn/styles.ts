import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import signInbackgroundImg from '~/assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  img {
    margin-top: 20px;
    width: 250px;
    height: 250px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;

  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  height: 800px;

  /**
    place-content: center;
  */
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;

  height: 100vh;
  margin-top: 100px;
  animation: ${appearFromLeft} 1.5s;

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #000;
      display: block;
      margin-top: 20px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.7, '#000')};
      }
    }
  }

  > a {
    color: #000;
    display: block;

    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${lighten(0.7, '#000')};
    }
  }
`;

export const Background = styled.div`
  height: 100%;
  background: url(${signInbackgroundImg}) no-repeat center;
  background-size: cover;
`;
