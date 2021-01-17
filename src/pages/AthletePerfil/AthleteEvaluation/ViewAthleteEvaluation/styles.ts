import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 6px;
`;

export const ChartArea = styled.div`
  background: #fff;
  margin: 20px;
  width: 800px;
  height: 700px;
  div {
    display: flex;
    flex-direction: column;

    align-content: center;

    .chartResult {
      margin-top: 20px;
      text-align: center;
      font-size: 18px;
      width: 400px;
    }
  }
  h2 {
    text-align: center;
  }
`;

export const EvaluationInfo = styled.div`
  background: #fff;
  margin: 20px;
  width: 800px;
  height: 450px;
  border-radius: 6px;
  div {
    display: flex;
    justify-content: space-around;
  }
  ol {
    p {
      font-size: 22px;
      font-style: bold;
    }
  }
  h2 {
    margin: 20px;
    text-align: center;
  }
`;
