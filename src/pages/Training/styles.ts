import styled from 'styled-components';

export const Container = styled.div``;

export const TrainingField = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 15px;
  align-content: flex-end;

  justify-content: space-around;
  input {
    padding: 12px;
    height: 50px;
    border-radius: 5px;
    width: 60%;
    border: 2px solid rgb(135, 134, 139);
  }
  a {
    padding: 10px 10px;
    border-radius: 50%;
    border: 0;
    margin-left: auto;
    transition: all ease 0.2s;

    &:hover {
      background: rgba(106, 161, 169, 0.29);
    }
  }
`;

export const TrainingCard = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  margin: 20px;

  .card-profile {
    cursor: pointer;
    opacity: 0.7;
    margin-bottom: 30px;
    cursor: pointer;
    width: 40vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    transition: all 0.25s ease;
    border-radius: 0.75rem;

    color: #000;
    /* background: linear-gradient(
      to right,
      rgba(42, 159, 255, 0.2) 10%,
      rgb(248, 248, 255) 60%,
      rgba(255, 255, 255, 1) 100%
    ) !important;
    -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75); */
    background: pink;
    p {
      color: #000;
      margin-bottom: 0px;
    }

    &:hover {
      transform: scale(1.05);
      border: 2px solid #000;
      opacity: 1;
      box-shadow: none;
    }
  }

  .card {
    display: flex;
    flex-direction: row;
    background: blue;
    .card-details {
      width: 75%;

      padding-top: 20px;
    }

    .name {
      font-size: 1.25rem;
    }

    .occupation {
      font-weight: 600;
      color: var(--primary);
    }

    .card-avatar-training {
      width: 9vw;
      height: 16vh;
      background: #f8f8f8;
      border-radius: 10%;
      align-self: center;
      display: flex;
      margin-left: 60px;
      justify-content: center;
      align-items: center;

      img {
        width: 50%;
        height: 50%;
        border-radius: 5px;
      }
    }
  }
`;
