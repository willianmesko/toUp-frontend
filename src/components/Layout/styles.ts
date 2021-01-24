import styled from 'styled-components';
import { shade } from 'polished';

interface AsideProps {
  width: number;
}
interface ContentProps {
  margin: string;
  flexDirection: string;
}

export const Container = styled.div`
  display: flex;
`;
export const TopArea = styled.div`
  max-width: 1366px;

  svg {
    cursor: pointer;
    display: block;
    margin: auto;
    transition: all 0.25s ease;

    &:hover {
      fill: ${shade(0.2, '#87868B')};
    }
  }
  h1 {
    text-align: center;
    padding: 20px;

    font-weight: 900;
  }
`;

export const Content = styled.main<ContentProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  height: auto;
  min-height: 100vh;
  margin: 100px ${props => props.margin};
`;

export const LinksUtils = styled.div`
  width: 350px;
  margin-top: 150px;
  height: 100vh;
  position: fixed;
  right: 0;

  hr {
    width: 80%;
  }

  a {
    color: #808080;
    text-decoration: none;
  }
`;

export const Post = styled.div`
  width: 300px;
  width: 250px;
  cursor: pointer;
  background: #fff;
  border-radius: 6px;
  margin-top: 20px;
  font-size: 14px;
  margin-left: 20px;
  color: #808080;
  transition: all ease 0.25s;
  img {
    margin-bottom: 5px;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
export const SideMenu = styled.div`
  width: 90px;
  background: #fff;

  display: flex;
  min-height: auto;
  justify-content: center;
  align-content: center;

  div {
    min-height: auto;
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

export const MenuLateral = styled.aside`
  height: 670px;
  width: 390px;
  background: linear-gradient(
    to top,
    rgba(42, 159, 255, 0.2) 10%,
    rgb(248, 248, 255) 60%,
    rgba(255, 255, 255, 1) 100%
  ) !important;
  color: #000;
  border-radius: 0.75rem;

  padding: 32px;
  margin-right: 50px;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    button {
      padding: 10px !important;
      background: #ff6347 !important;
    }
    .mediasocial-area {
      display: flex;
      flex-direction: row;
      align-self: center;
      width: 60%;

      justify-content: center;
      align-items: center;

      svg {
        margin-right: 8px;
        cursor: pointer;
      }
    }
    .training-image {
      background: pink !important;
      width: 100px !important;
      height: 100px !important;
      border-radius: 6px !important;

      img {
        display: block;
        width: 80px !important;
        height: 80px !important;
        border-radius: 2px !important;
        border: none !important;
      }
    }
    img,
    .no-image {
      display: block;
      width: 180px;
      height: 180px;
      margin: 0px auto 24px;
      background: #f8f8f8;
      border-radius: 50%;
      text-align: center;
      font-size: 90px;

      border-width: 2px;
      border-style: solid;
      border-color: rgb(135, 134, 139);
      border-image: initial;

      p {
        margin-top: 1vh;
        color: rgb(135, 134, 139);
      }
    }

    h2,
    h5 {
      text-align: center;
      margin: 5px;
    }

    .information-area {
      margin-top: 60px;

      li {
        padding: 3px;
        cursor: pointer;
        border-radius: 6px;
        transition: all 0.25s ease;

        &:hover {
          background: rgba(106, 161, 169, 0.29);
        }
      }
      p {
        font-weight: 500;
        font-size: 16px;
        margin: 5px;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
