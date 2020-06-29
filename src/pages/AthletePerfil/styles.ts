import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    list-style-type: none;
    text-align: center;

    .activeTab {
      color: rgb(42, 159, 255);
      width: 50%;
      height: 40px;
      font-weight: bolder;
      border-bottom: 2px solid rgb(42, 159, 255);

      transition: all ease 0.25s;

      &:hover {
        background: rgba(106, 161, 169, 0.29);
      }
    }

    .defaultTab {
      &:hover {
        background: rgba(106, 161, 169, 0.29);
        color: rgb(42, 159, 255);
      }
      height: 40px;
      transition: all ease 0.25s;
      width: 50%;
      font-weight: bolder;
      color: rgb(135, 134, 139);
    }
  }
`;

export const Content = styled.div`
  width: 800px;
  display: flex;
  align-content: center;

  flex-direction: column;
  min-height: 800px;
  max-height: 10000px;
  border-radius: 4px;
`;

export const Cards = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, auto);

  grid-gap: 20px;
  list-style: none;
`;

export const TrainingInfo = styled.div`
  display: flex;
  width: 95%;
  margin-top: 30px;
  color: rgb(135, 134, 139);
  height: 160px;
  justify-content: center;
  border-radius: 0.75rem;
  transition: all 0.5s ease;
  background: #fff;
  .training-image {
    width: 20%;

    img {
      margin-left: 30px;
      margin-top: 30px;
      width: 90px;
    }
  }

  .training-about {
    margin-top: 20px;
    width: 20%;
  }
  .routines {
    display: flex;
    width: 60%;
    font-weight: 500;
    align-items: center;
    justify-content: space-around;
    transition: all 0.5s ease;
    flex-wrap: wrap;
    .routine-default {
      transition: all 0.5s ease;
      width: 45%;
      height: 30px;
      border-width: 0.1px;
      border-style: solid;
      border-color: #f0f0f0;
      background: #fff;

      border-left: 8px solid rgb(42, 159, 255);
      border-radius: 6px;
      cursor: pointer;
      text-align: center;

      color: rgb(135, 134, 139);

      &:hover {
        transform: scale(1.05);
        border-left: 8px solid rgb(42, 159, 255);
        border: 2px solid rgb(42, 159, 255);
        color: rgb(42, 159, 255);
      }
    }

    .routine-active {
      transition: all 0.5s ease;
      width: 45%;
      height: 30px;
      background: #fff;
      border-radius: 6px;
      cursor: pointer;
      text-align: center;
      border: 2px solid rgb(42, 159, 255);
      border-left: 8px solid rgb(42, 159, 255);
      color: rgb(42, 159, 255);

      &:hover {
        transform: scale(1.05);
        border-left: 8px solid rgb(42, 159, 255);
        border: 2px solid rgb(42, 159, 255);
      }
    }
  }
`;

export const RoutineInfo = styled.div`
  margin-top: 20px;

  border-radius: 6px;
  height: 500px;
  width: 95%;

  ul {
    justify-content: flex-start;
    flex-direction: column;

    li {
      border-radius: 6px;
      display: flex;

      margin-bottom: 15px;
      width: 80%;
      height: 120px;
      background: #fff;
      color: rgb(135, 134, 139);
      .exercice-video {
        align-items: center;
        width: 20%;
        height: 100%;
        border-left: 8px solid rgb(42, 159, 255);
        border-radius: 6px 0 0 6px;
      }
      .exercice-info {
        width: 80%;
        padding: 5px;
        height: 35px;
        text-align: left;

        font-size: 18px;
      }
    }
  }
`;
