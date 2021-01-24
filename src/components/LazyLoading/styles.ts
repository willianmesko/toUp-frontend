import styled, { keyframes } from 'styled-components';



const moveUpDown = keyframes`
   0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
`;


export const AnimationContainer = styled.div`
 
 animation: ${moveUpDown} 3s ease-in-out 0s infinite normal none running;
 position:absolute;
left:45%;
right:0;

 img {
     width: 180px;
     height: 180px;
 }

 `