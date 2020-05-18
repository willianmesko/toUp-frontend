import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import signInbackgroundImg from '~/assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  img {
    margin-top: 20px;
    width: 250px;
    height: 250px;
  }

  /**
    place-content: center;
  */
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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

  animation: ${appearFromRight} 1.5s;

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
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#000')};
      }
    }
  }

  > a {
    color: #000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${lighten(0.2, '#00ff00')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInbackgroundImg}) no-repeat center;
  background-size: cover;
`;
