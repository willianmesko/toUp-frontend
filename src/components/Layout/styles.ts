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
  max-width: 1366px;
  height: 100vh;
  display: flex;
  flex-direction: ${props => props.flexDirection};

  margin: 100px ${props => props.margin};
`;
export const SideMenu = styled.div`
  width: 120px;
  background: #fff;
  min-height: 100vh;
  max-height: 10000px;
  display: flex;
  justify-content: center;
  align-content: center;

  div {
    display: flex;
    width: 120px;
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

export const MenuLateral = styled.aside<AsideProps>`
  height: 800px;
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
      margin-top: 80px;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 8px;
        cursor: pointer;
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

      border-width: 4px;
      border-style: solid;
      border-color: rgb(135, 134, 139);
      border-image: initial;

      p {
        margin-top: 1vh;
        color: rgb(135, 134, 139);
      }
    }

    h2 {
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
