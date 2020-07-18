import styled from 'styled-components';
import { shade } from 'polished';

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
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  p {
    color: #000;
    margin-bottom: 0px;
  }

  .card-training {
    cursor: pointer;
    width: 40vw;
    height: 20vh;
    opacity: 0.7;
    transition: all 0.5s ease;
    border-radius: 0.75rem;
    transition: all 0.5s ease;
    background: linear-gradient(
      to right,
      rgba(42, 159, 255, 0.2) 10%,
      rgb(248, 248, 255) 60%,
      rgba(255, 255, 255, 1) 100%
    ) !important;
    -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
    display: grid;
    grid-template-columns: 40% auto;
    color: #000;

    align-items: center;

    will-change: transform;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.05);
      border: 3px solid #000;
      opacity: 1;
      box-shadow: none;
    }
  }

  .card-details {
    padding: 1rem;
  }

  .name {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.25rem;

    .icons {
      svg {
        margin: 5px;
        cursor: pointer;

        transition: all 0.25s ease;

        &:hover {
          fill: ${shade(0.2, '#87868B')};
        }
      }
    }
  }

  .occupation {
    font-weight: 200;
    color: var(--primary);
  }

  .card-image {
    display: grid;
    justify-self: center;
    place-items: center;
    width: 10vw;
    height: 16vh;
    border-radius: 6px;

    background: #f8f8f8;
    div,
    img {
      width: 7vw;
      height: 14vh;
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
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
  }
`;
