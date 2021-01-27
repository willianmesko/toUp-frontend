import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  .legend {
    display: flex;
    flex-direction: row;
    font-size: 13px;
    align-self: center;
    align-content: center;
    justify-content: center;
    .legend-1 {
      width: 50px;
      height: 15px;
      background: black;
      margin: 3px;
    }

    .legend-2 {
      width: 50px;
      height: 15px;
      background: pink;
      margin: 3px;
    }
  }
`;

export const ChartArea = styled.div`
  background: #fff;
  margin: 20px;
  width: 800px;
  height: 650px;
  display: flex;
  flex-direction: column !important;
  -webkit-box-shadow: 10px 10px 15px -8px rgba(0,0,0,0.84); 
    box-shadow: 10px 10px 15px -8px rgba(0,0,0,0.84);

  .infoResult {
    display: flex;

    ol {
      p {
        font-size: 22px;
        font-style: bold;
      }
    }
  }
  .charts {
    display: flex;
    align-content: center;

    .chartResult {
      margin-top: 20px;
      text-align: center;
      font-size: 18px;
      width: 400px;
      margin-bottom: 20px;
      .Component-root-1 {
        margin-left: 80px;
      }
    }
  }
  h3 {
    text-align: center;
  }
`;

export const EvaluationInfo = styled.div`
  background: #fff;
  margin: 20px;
  width: 800px;
  height: 450px;
  border-radius: 6px;
  
  -webkit-box-shadow: 10px 10px 15px -8px rgba(0,0,0,0.84); 
    box-shadow: 10px 10px 15px -8px rgba(0,0,0,0.84);
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
  h3 {
    margin: 20px;
    text-align: center;
  }
`;
