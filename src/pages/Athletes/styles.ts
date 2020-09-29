import styled from 'styled-components';
import { shade } from 'polished';
import backgroundCard from '~/assets/MountainsOpacity.a4edba24.png';

export const Container = styled.div`
  border-radius: 10px;
`;

export const NoAthlete = styled.div`
  display: 'flex';

  .react-loading-skeleton {
    margin-bottom: 10px;
    border-radius: 10px !important;
  }
`;

export const LoadingMore = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 30px;
  button {
    border-radius: 10px;
    width: 150px;
    height: 50px;
    background: #93ccea;
    border: none;
    color: #fff;
  }
`;

export const AthleteField = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 15px;
  align-content: flex-end;

  justify-content: space-around;
  input {
    padding: 12px;
    height: 50px;
    border-radius: 50px;
    width: 80%;
    border: none;
  }
  span {
    cursor: pointer;
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

export const AthleteCard = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  p {
    color: #000;
    margin-bottom: 0px;
  }

  .card-profile-athlete {
    cursor: pointer;
    width: 700px;
    height: 200px;
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
      -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
      box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
      opacity: 1;
    }
  }

  .card-details {
    padding: 1rem;
    background: url(${backgroundCard}) no-repeat center;
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

  .card-avatar {
    display: grid;
    place-items: center;
    div,
    img {
      width: 150px;
      height: 150px;
      background: #f8f8f8;
      border-radius: 50%;
      text-align: center;
      font-size: 90px;

      p {
        margin-top: 1vh;
        color: rgb(135, 134, 139);
      }
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
