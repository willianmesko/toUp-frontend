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
  display: grid;
  margin: 20px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;

  .card-profile {
    cursor: pointer;
    width: 40vw;
    height: 18vh;
    transition: all 0.5s ease;
    border-radius: 0.75rem;
    transition: all 0.5s ease;
    background: linear-gradient(
      to right,
      rgba(42, 159, 255, 0.2) 10%,
      rgb(248, 248, 255) 60%,
      rgba(255, 255, 255, 1) 100%
    ) !important;
    p {
      color: #000;
      margin-bottom: 0px;
    }
    display: grid;
    grid-template-columns: 40% auto;
    color: #000;

    align-items: center;

    will-change: transform;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.05);
      border: 2px solid #000;
      img {
        transform: scale(1.01);
      }
    }
  }

  .card-details {
    padding: 1rem;
  }

  .name {
    font-size: 1.25rem;
  }

  .occupation {
    font-weight: 600;
    color: var(--primary);
  }

  .card-avatar-training {
    width: 80%;
    height: 18vh;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      height: 70%;
      border-radius: 5px;
    }
  }

  .card-about {
    margin-top: 1rem;
    display: grid;
    grid-auto-flow: column;
  }

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;

    .value {
      font-size: 1rem;
    }

    .label {
      margin-top: 0.15rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--primary);
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    margin-top: 0.75rem;

    .label {
      font-size: 1rem;
      font-weight: 600;
      color: var(--primary);
    }

    .value {
      margin-top: 0.15rem;
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
  }
`;
