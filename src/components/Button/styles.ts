import styled from 'styled-components';
import { shade } from 'polished';


interface ButtonProps {
  height?: string;
  width?: string;
}


export const Container = styled.button<ButtonProps>`
  background: #93ccea;
  height:  ${props => props.height ? props.height : '56px'};
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: ${props => props.width ? props.width : '100%'};
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#93ccea')};
  }
`;
