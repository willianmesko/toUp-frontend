import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(248, 248, 255);
  z-index: 99999;
  padding: 0 30px;
  opacity: 1;
  top: 0;
  width: 100%;
  position: fixed;
`;

export const Content = styled.div`
  height: 80px;
  max-width: 1336px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 80px;
      margin-right: 20px;
      padding-right: 20px;
    }
    a {
      font-weight: bold;
      color: #7159c1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: rgb(135, 134, 139);
      font-weight: bold;
      margin-bottom: 6px;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: rgb(135, 134, 139);
    }
  }
  img {
    width: 56px;
    height: 56px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(135, 134, 139);
    border-image: initial;
    border-radius: 50%;


`;
