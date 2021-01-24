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
 width: 100%;
 display: flex;
 height: 100vh;
 animation: ${moveUpDown} 3s ease-in-out 0s infinite normal none running;
 color: #fff;
 text-align: center;
 font-size: 130px;
justify-content: center;
align-items: center;
 img {
     width: 180px;
     height: 180px;
 }

 `