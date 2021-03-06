import styled from 'styled-components';

import { shade } from 'polished';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0;
  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    > div {
      margin-bottom: 10px;
    }
    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }

    a {
      color: #75a3bb;
      display: flex;
      align-items: center;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      svg {
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#75a3bb')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;

  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
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
