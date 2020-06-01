import styled from 'styled-components';
import { shade } from 'polished';

interface AsideProps {
  width: number;
}

export const TopArea = styled.div`
  max-width: 1366px;
  margin: 80px auto 50px auto;

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
    color: rgb(135, 134, 139);
    font-weight: 900;
  }
`;

export const Content = styled.main`
  max-width: 1366px;
  display: flex;
  margin: 100px auto;
`;

export const MenuLateral = styled.aside<AsideProps>`
  display: block;

  height: 800px;
  width: ${props => `${props.width}px`};
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
    img {
      display: block;
      width: 180px;
      height: 180px;
      margin: 0px auto 24px;
      border-radius: 50%;

      border-width: 4px;
      border-style: solid;
      border-color: rgb(135, 134, 139);
      border-image: initial;
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
