import styled from 'styled-components';
import { shade } from 'polished';

interface AsideProps {
  width: number;
}
interface ContentProps {
  margin?: string;
  flexDirection?: string;
}

export const Container = styled.div`
`;


export const Content = styled.main<ContentProps>`
  display: flex;
  margin: 100px 0 0 150px;
`;



export const Menu = styled.div`
  width: 90px;
  background: #fff;
  position: fixed;
  left:0;
  bottom:0;
  height: 100%;

  justify-content: center;
  align-content: center;

  div {
    
    display: flex;
    width: 90px;
    position: fixed;
    flex-direction: column;

    margin-top: 140px;

    a {
      text-decoration: none;
    }

    .default {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 80px;
      color: #a9a9a9;
      text-align: center;
      cursor: pointer;
      transition: all ease 0.25s;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
        color: rgb(42, 159, 255);
        svg {
          fill: rgb(42, 159, 255) !important;
          stroke-width: 0 !important;
          stroke: rgb(42, 159, 255) !important;
        }
      }

      svg {
        fill: none;
        stroke-width: 10px;
        stroke: #a9a9a9;
      }
    }

    .active {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      height: 80px;
      color: rgb(42, 159, 255);
      text-align: center;
      cursor: pointer;
      transition: all ease 0.25s;
      background: rgba(0, 0, 0, 0.2);
      &:hover {
        background: rgba(0, 0, 0, 0.2);
        color: rgb(42, 159, 255);
        svg {
          fill: rgb(42, 159, 255) !important;
          stroke-width: 0 !important;
          stroke: rgb(42, 159, 255) !important;
        }
      }

      svg {
        fill: rgb(42, 159, 255) !important;
        stroke-width: 0 !important;
        stroke: rgb(42, 159, 255) !important;
      }
    }
  }
`;

