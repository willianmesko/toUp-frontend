import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import signInbackgroundImg from '~/assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  ul {
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    list-style-type: none;

    .active {
      font-weight: bolder;
      border-bottom: 2px solid #93ccea;
      margin-right: 25px;
    }

    .desactive {
      border-bottom: 2px solid white;
      margin-right: 25px;
    }
  }

  img {
    margin-top: 20px;
    width: 250px;
    height: 250px;
  }

  /**
    place-content: center;
  */
`;

export const ContactTo = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;

  justify-content: center;
  width: 100%;
  max-width: 700px;
  height: 350px;

  /**
  place-content: center;
*/
`;
export const SexoInput = styled.div`
  display: flex;
  padding-top: 10px;
  color: #000;
  align-content: center;
  justify-content: space-around;

  /**
place-content: center;
*/
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;

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
      color: ${lighten(0.2, '#000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInbackgroundImg}) no-repeat center;
  background-size: cover;
`;
