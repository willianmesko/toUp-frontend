import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 0px;

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
      line-height: 40px;
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
      line-height: 40px;
      height: 40px;
      transition: all ease 0.25s;
      width: 50%;
      font-weight: bolder;
      color: #000;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: 10px;

  button {
    margin-right: 5px;
  }
`;

export const MenuLateral = styled.aside`
  height: 670px;
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

      justify-content: center;
      align-items: center;

      svg {
        margin-right: 8px;
        cursor: pointer;
      }
    }
    .training-image {
      background: pink !important;
      width: 100px !important;
      height: 100px !important;
      border-radius: 6px !important;

      img {
        display: block;
        width: 80px !important;
        height: 80px !important;
        border-radius: 2px !important;
        border: none !important;
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

      border-width: 2px;
      border-style: solid;
      border-color: rgb(135, 134, 139);
      border-image: initial;

      p {
        margin-top: 1vh;
        color: rgb(135, 134, 139);
      }
    }

    h2,
    h5 {
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

export const CustomDot = styled.hr`
  width: 20px;
  height: 2px;
  background: pink;
  margin-left: 10px;
`;

export const Content = styled.div`
  width: 800px;
  display: flex;
  align-content: center;
  h5 {
    font-weight: 600;
  }
  .carousel-container {
    margin-top: -20px;
    display: flex;
    width: 800px !important;
    height: 150px;
  }
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

    img {
      margin-top: -50px;
      width: 800px;
      height: 400px;
    }
  }
`;

interface TrainingContainerProps {
  active?: boolean;
}
export const TrainingContainer = styled.div<TrainingContainerProps>`
  width: 260px !important;

  font-size: 15px;

  &:hover {
    font-weight: bold;
    font-size: 20px;
    transform: scale(1.05) translate3d(5px, 5px, 5px);
    margin-top: -10px;
  }

  ${props =>
    props.active &&
    css`
      margin-right: 100px;
      color: #3172b7;
      font-weight: bold;
      font-size: 20px;
      transform: scale(1.05) translate3d(5px, 5px, 5px);
      margin-top: -10px;

      border-top: 4px solid rgb(42, 159, 255);
      border-bottom: 4px solid rgb(42, 159, 255);
    `}

  line-height: 80px;
  text-align: center;
  transition: transform 500ms;
  color: #000;
  height: 80px;
  background: #fff;
  display: flex;

  justify-content: center;
  text-align: center;
  border-radius: 5px;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);

  .routine-info {
    display: flex;
    width: 100%;
    text-align: center;

    .routine-img {
      width: 30px;

      height: 30px;
    }
  }
`;

export const RoutineInfo = styled.div``;
