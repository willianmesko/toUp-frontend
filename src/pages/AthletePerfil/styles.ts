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
      color: #000;
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
  .exercice-info {
    margin-top: 20px;

    border-radius: 6px;
    height: 500px;
    width: 95%;

    ul {
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;

      li {
        opacity: 0.8;
        border-radius: 6px;
        display: flex;
        transition: all ease 0.25s;
        margin-left: 15px;
        margin-bottom: 15px;
        width: 45%;
        height: 120px;
        background: #fff;
        color: #000;
        -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
        &:hover {
          opacity: 1;
        }
        .exercice-border {
          align-items: center;
          width: 5%;
          height: 100%;
          border-left: 8px solid rgb(42, 159, 255);
          border-radius: 6px 0 0 6px;
        }
        .exercice-info {
          width: 95%;
          padding: 5px;
          height: 35px;
          text-align: center;

          font-size: 18px;

          table {
            width: 100%;
            font-size: 14px;
          }

          .exercice-title {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            .exercice-icons {
              display: none;
              transition: all ease 0.25s;
              p {
                justify-content: center;
                align-items: center;
                display: flex;
                width: 30px;

                border-radius: 6px;
                margin-left: 6px;

                &:hover {
                  background: rgba(106, 161, 169, 0.29);
                }
              }
            }
          }
        }
        &:hover {
          .exercice-title {
            .exercice-icons {
              display: flex;
            }
          }
        }
      }
    }

    .exercice-modal {
      background: pink;
    }
  }

  .no-training {
    text-align: center;

    h3 {
      cursor: pointer;
    }
  }
`;

export const TrainingContainer = styled.div`
  width: 95%;
  margin-top: 30px;
  color: #000;
  height: 160px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  transition: all 0.5s ease;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);

  .icons-action {
    margin-top: 10px;
    align-self: flex-end;
    display: flex;
    span {
      padding: 5px;
      margin-right: 5px;
      width: 40px;
      height: 40px;
      border-radius: 6px;

      &:hover {
        background: rgba(106, 161, 169, 0.29);
      }
      svg {
        cursor: pointer;
      }
    }
  }
  .training {
    display: flex;
    justify-content: center;

    .training-image {
      width: 20%;

      img {
        margin-left: 30px;
        margin-top: 30px;
        width: 90px;
      }
    }

    .training-about {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      width: 20%;
    }
    .routines {
      display: flex;
      width: 60%;
      font-weight: 500;
      align-items: center;
      justify-content: space-around;
      transition: all 0.25s ease;
      flex-wrap: wrap;
      .routine-default {
        transition: all 0.5s ease;
        width: 45%;
        height: 35px;
        border-width: 0.1px;
        border-style: solid;
        border-color: #f0f0f0;
        background: #fff;
        opacity: 0.5;
        border-left: 8px solid rgb(42, 159, 255);
        border-radius: 6px;
        cursor: pointer;
        text-align: center;

        color: #000;

        &:hover {
          transform: scale(1.05);
          border-left: 8px solid rgb(42, 159, 255);
          border: 2px solid rgb(42, 159, 255);
          color: rgb(42, 159, 255);
          opacity: 1;
        }
      }

      .routine-active {
        transition: all 0.5s ease;
        width: 45%;
        height: 35px;
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
  }
`;

export const RoutineInfo = styled.div``;
