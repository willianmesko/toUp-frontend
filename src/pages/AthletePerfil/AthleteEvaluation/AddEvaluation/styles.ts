import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

interface InputProps {
  ref?: string;
}
export const Container = styled.div``;

export const AthleteInfo = styled.div`
  /* background: rgba(147, 204, 234, 0.1); */
  background: rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  &:focus {
    border: 1px solid blue;
  }
  .content {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: all ease 0.25s;
    .date {
      width: 100%;
      input {
        height: 30px;
        border: none;
        border-radius: 6px;
        outline: none;
        margin-left: 10px;

        &:focus {
          border: 1px solid #93ccea;
        }
      }
    }
    .input-area {
      width: 40%;
      margin-bottom: 10px;
      margin-left: 10px;
      input {
        height: 30px;
        border: none;
        border-radius: 6px;
        outline: none;
        margin-left: 10px;

        &:focus {
          border: 1px solid #93ccea;
        }
      }
    }
  }
`;

export const Evaluation = styled.div`
  margin-top: 30px;

  .dobras_cutaneas {
    background: rgba(255, 255, 255, 0.4);

    border-radius: 6px;
    border-top: none;
    margin-bottom: 20px;
  }

  .perimetros_corporais {
    /* background: rgba(147, 204, 234, 0.1); */
    background: rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    border-top: none;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 20px 10px;

    input {
      height: 30px;
      border: none;
      border-radius: 6px;
      outline: none;
      width: 80px;

      &:focus {
        border: 1px solid #93ccea;
      }
    }
  }
`;

export const InputStyled = styled.input<InputProps>`
  height: 30px;
  border: none;
  border-radius: 6px;
  outline: none;
  width: 80px;

  &:focus {
    border: 1px solid #93ccea;
  }
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    color: #fff;
    border: none;
    border-radius: 6px;
    background: #75a3bb;
    width: 120px;
    height: 30px;
  }
`;
export const Header = styled.div`
  background: #75a3bb;
  color: #fff;
  display: flex;
  height: 45px;
  font-size: 20px;
  justify-content: space-between;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.25s;
  padding: 7px;

  &:hover {
    background: ${shade(0.2, '#75a3bb')};
  }
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

export const NewEvaluationModel = styled.div`
  animation: ${appearFromLeft} 1.5s;

  display: flex;
  flex-direction: column;

  align-items: center;
  p {
    font-size: 20px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    li {
      width: 200px;
      border: 1px solid #808080;
      height: 30px;
      background: #fff;
      margin-top: 10px;
      border: 6px;
    }
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1.5s;
`;
