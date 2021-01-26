import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


interface AvatarProps {
    height?: string;
    width?: string;
}


const loadingBorder = keyframes`
from{
   
    stroke-dasharray: 5;
    transform:rotate(0deg);
   
  }
  to{
  
    transform:rotate(90deg);
    stroke-dasharray: 1;
  }
`;



export const Container = styled.button<AvatarProps>`
  margin-top: -150px;
  align-self: center;
  width:280px;
  height:280px;
  cursor: pointer;
  position:relative;
  
  svg{
    fill:none;
    stroke:#75a3bb;;
    stroke-linecap: round;
    stroke-width:3;
    animation: ${loadingBorder} 3s ease-out forwards;
    animation-timing-function: cubic-bezier(0.25,0.5,.75,1);  
     
  }
  img{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    width:210px;
    border-radius:50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #75a3bb;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      color: #312e38;
      height: 20px;
      width: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#75a3bb')};
    }
  }
`;
