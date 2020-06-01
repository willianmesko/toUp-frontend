import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;


  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;




  ${props =>
    props.isErrored &&
    css`
      border-color: #c33030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #93ccea;
      border-color: #93ccea;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #93ccea;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;


    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  cursor: pointer;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
