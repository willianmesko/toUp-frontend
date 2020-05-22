import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  margin-left: 20px;

  width: 100%;
  min-height: 500px;

  .left-side {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      align-self: center;
      height: 300px;
      width: 300px;
    }
  }

  .right-side {
    width: 70%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .register-athlete {
      input {
        padding: 20px;
        margin: 20px;
        width: 45%;
        height: 36px;
      }
    }
  }
`;
