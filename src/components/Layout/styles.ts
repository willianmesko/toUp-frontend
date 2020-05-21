import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 100px auto;
  h1 {
    text-align: center;
    padding: 100px;
    color: #000;
  }
`;

export const Content = styled.main`
  margin-top: 100px;
  display: flex;
`;

export const MenuLateral = styled.aside`
  display: block;
  height: 1200px;
  width: 350px;
  background: #fff;
  color: #000;
  border-radius: 5px;
  border: 1px solid #000;
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
