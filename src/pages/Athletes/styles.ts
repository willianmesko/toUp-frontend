import styled from 'styled-components';
import { shade } from 'polished';

export const AthleteField = styled.div`
  display: flex;
  margin-left: 20px;

  align-items: baseline;
  justify-content: space-between;
  input {
    height: 50px;
    border-radius: 5px;
    width: 60%;
  }
  a {
    width: 30%;
    height: 45px;
    background: #93ccea;
    padding: 10px 10px;
    border-radius: 10px;
    border: 0;
    text-align: center;
    color: #312e38;

    font-weight: 500;

    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#93ccea')};
    }
  }
`;
