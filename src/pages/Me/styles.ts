import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

export const Cover = styled.div`
  min-height: 280px;;
  width: 100vw;
  background: #93ccea;
  margin-top: -15px;

`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background: #93ccea;
  color: #fff;
  margin-left: 10px;
  line-height: 30px;
  text-align: center;
`;

export const Profile = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 6px;
  background: #fff;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;

  justify-content: space-between;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -0px 1px 3px 0px rgba(0, 0, 0, 0.75);
`;

export const MemberSince = styled.div`
  height: 40px;
  width: 100%;
  border-top: 2px solid #d3d3d3;

  padding-top: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

export const Info = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;

  border-bottom: 4px solid #666666;
  .userName {
    h1 {
      font-weight: bold;
    }
    p {
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      color: #1c3f7f;
    }
    h6 {
      font-weight: 600;
      color: #808080;
    }
  }

  .editUser {
    form {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-self: center;
      justify-content: center;
      align-items: center;
      div {
        width: 70% !important;
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        button {
          width: 40% !important;
        }
      }
    }
  }
`;
export const Medias = styled.div``;
export const AboutMe = styled.div`
  width: 800px;
  min-height: 200px;
  border-radius: 6px;
  background: #fff;
  padding: 25px;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -0px 1px 3px 0px rgba(0, 0, 0, 0.75);

  header {
    h2 {
      font-weight: bold;
    }
    display: flex;
    justify-content: space-between;
    svg {
      cursor: pointer;
    }
  }
`;

export const Bio = styled.div`
  margin-top: 30px;
  textarea {
    width: 100%;
    border: none;
  }
`;

export const LinkPerfil = styled.div`
  margin-top: 20px;
  padding: 10px 0 0 10px;
  font-size: 13px;
  font-weight: bold;
  width: 350px;
  height: 70px;
  background: #fff;
  border-radius: 6px;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -0px 1px 3px 0px rgba(0, 0, 0, 0.75);

  input {
    margin-top: -50px;
    margin-left: 20px;
  }
`;

export const Skills = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 20px;
  border-radius: 6px;
  background: #fff;
  padding: 25px;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  h2 {
    font-weight: 800;
  }
`;

export const LeftBox = styled.div`
  width: 40%;
  span {
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const RightBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    justify-content: space-around;
    div {
      border: none;
      width: 49% !important;
    }
  }
`;


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

export const Avatar = styled.div`
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
