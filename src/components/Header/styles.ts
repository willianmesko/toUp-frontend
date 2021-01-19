import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  z-index: 99999;
  padding: 0 30px;
  opacity: 1;
  top: 0;
  width: 100%;
  position: fixed;
  align-items: center;
`;

export const Content = styled.div`
  height: 70px;
  max-width: auto;
  margin: 0 auto;
  display: flex;

  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;

    img {
      width: 80px;
      height: 60px;
      margin-left: -15px;

      padding-right: 20px;
    }
    a {
      font-weight: bold;
      color: #000;
    }
  }
  aside {
    display: flex;

    align-items: center;
  }
`;

export const Upgrade = styled.div`
  background: linear-gradient(
    to right top,
    #6ba0d1,
    #5797d6,
    #438dda,
    #3182de,
    #2477e0,
    #1582e6,
    #058ceb,
    #0096ef,
    #47b5f0,
    #85d0ef,
    #c1e9f2,
    #fdffff
  );
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  width: 150px;
  height: 30px;
  text-align: center;
  margin-right: 20px;
  font-weight: bold;
  line-height: 30px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
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
      color: #000;
      font-weight: 500;
      margin-bottom: 6px;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #000;
    }
  }

  .no-image {
    text-align: center;
    font-size: 30px;
    width: 45px;
    height: 45px;
    border-width: 3px;
    background: #f8f8f8;
    color: rgb(135, 134, 139);
    border-radius: 50%;
  }
  img {
    width: 45px;
    height: 45px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(135, 134, 139);
    border-image: initial;
    border-radius: 50%;
  }
`;

export const Menu = styled.div`
  display: flex;
  margin-left: 150px;

  li {
    display: flex;
    text-align: center;
    flex-direction: column;
    color: #a9a9a9;
    margin: 0 20px 0 20px;
    height: 90%;
    &.active {
      border-bottom: 2px solid #3bb9e3;
      color: #3bb9e3;
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
