import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import trainingCover from '~/assets/training-card.jpg';

export const Container = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 50px;
  color: #000;
`;

export const Cover = styled.div`
  width: 1200px;
  height: 220px;
  border-radius: 5px;
  background: url(${trainingCover}) no-repeat center;
  background-size: cover;
`;

export const TrainingArea = styled.div`
  margin: 0 auto;
  h1 {
    font-size: 30px;
    text-align: center;
  }
  button {
    float: center;
  }
  form {
    margin: 20px 0;
    width: 500px;
    #title {
      grid-area: title;
    }
    #description {
      grid-area: description;
      input {
        height: 100px;
      }
    }

    #cycle {
      grid-area: cycle;
    }

    /* > div {
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 2fr;

      display: grid;

      grid-template-areas:
        'title  difficulty'
        'description  description';
    }
  } */
`;

export const RoutineArea = styled.div`
  flex: 0;
`;
