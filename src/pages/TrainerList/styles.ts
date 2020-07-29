import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1333px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
}
`;

export const TrainerContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
`;

export const Trainer = styled.li`
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    height: 250px;
    border-radius: 5px 5px 0 0;
  }

  footer {
    flex: 1;
    background: #fff;
    border: 1px solid pink;
    padding: 15px 20px;
    text-align: left;
    border-radius: 0 0 5px 5px;
    span {
      font-size: 13px;
      color: blue;
      margin-top: 5px;
    }
    strong {
      font-size: 16px;
      color: #000;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      color: red;
      margin-top: 5px;
    }

    .buttons {
      margin-top: 10px;
      display: grid;
      background: #fff;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      button {
        height: 50px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
        border: 0;
        border-radius: 4px;
        background: blue;
        cursor: pointer;
      }
    }
  }
`;
