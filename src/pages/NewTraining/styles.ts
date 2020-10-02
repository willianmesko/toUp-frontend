import styled from 'styled-components';

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


`;
