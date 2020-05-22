import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1366px;
  margin: 150px auto;

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
    padding: 50px;
    color: #000;
  }
`;

export const Content = styled.main`
  margin-top: 100px;
  display: flex;
`;

export const MenuLateral = styled.aside`
  display: block;
  height: 900px;
  width: 350px;
  background: linear-gradient(
    to bottom,
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
  }
`;
