import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
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
  }
`;

export const Menu = styled.div`
  display: flex;
  margin-left: 100px;
  li {
    margin: 0 20px 0 20px;
    &.active {
      border-bottom: 2px solid #3bb9e3;
      &:hover {
        border-radius: 0px !important;
        background: rgb(248, 248, 255) !important;
      }
      svg {
        margin: 10px 25px;
        fill: rgb(42, 159, 255) !important;
        stroke-width: 0 !important;
        stroke: rgb(42, 159, 255) !important;
      }
    }

    cursor: pointer;

    transition: all 0.25s ease;
    &:hover {
      border-radius: 6px;
      background: rgba(106, 161, 169, 0.29);
    }
    svg {
      margin: 10px 25px;
      fill: none;
      stroke-width: 20px;
      stroke: #a9a9a9;
      width: 40;
    }
  }
`;
