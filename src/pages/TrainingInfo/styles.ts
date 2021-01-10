import styled from 'styled-components';

interface RoutineAreaProps {
  width?: string;
  show?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .icons-action {
    display: flex;
    justify-content: flex-end;

    svg {
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  min-height: 560px;
  max-height: 10000px;
  border-radius: 4px;
`;

export const Cards = styled.ul`
  display: grid;

  grid-template-columns: repeat(3, auto);
  grid-template-rows: 16ch 16ch 10px;
  grid-gap: 20px;
  list-style: none;
`;

export const Card = styled.li`
  cursor: pointer;
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.5s ease;

  &:hover {
      transform:
      box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
      -webkit-transform: translateX(-3px);
      transform: scale(1.1);
      border: 2px solid #000;

    }
`;

export const RoutinesArea = styled.div`
  width: 900px;
  padding: 20px;
  flex-wrap: wrap;
  display: flex;
  background: #fff;
  margin-top: 30px;
  border-radius: 6px;
  justify-content: space-around;
  align-content: center;
  opacity: 0.8;
  align-items: center;
`;

export const View = styled.ul`
  display: flex;
  width: 900px;
  text-align: center;

  .activeTab {
    color: rgb(42, 159, 255);
    width: 50%;
    height: 40px;
    font-weight: bolder;
    border-bottom: 2px solid rgb(42, 159, 255);
    cursor: pointer;
    transition: all ease 0.25s;

    &:hover {
      background: rgba(106, 161, 169, 0.29);
    }
  }

  .defaultTab {
    cursor: pointer;
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
`;
export const Routine = styled.div<RoutineAreaProps>`
  width: ${props => props.width} !important;
  transition: all ease 0.25s;
  .routine_flipped {
    padding: 20px;
    width: ${props => props.width} !important;
    margin-bottom: 5px;
    max-height: 300px;
    display: flex;
    .exercice-video-view {
      width: 40%;
      #player {
        border-radius: 6px;
        border: solid 1px #999;

        height: 250px;

        z-index: 10;

        iframe {
          z-index: 9;
        }
      }
    }
      .exercice-info-view {
        margin-left: 30px;
        width: 60%;
        text-align: center;
      }
      table {
        width: 100%;
      }
      h4 {
        margin-top: 20px;
      }
      form {
        margin-top: 20px;
      }
    }
  }
  .table-container {
    width: ${props => props.width} !important;
    transition: all ease 0.25s;
    max-height: 300px;
    margin-bottom: 5px;
    display: ${props => props.show} !important;
    table {
      font-size: 12px;
      transition: all ease 0.25s;
      cursor: pointer;
      border: 1px solid #808080;
      border-top: none;
      border-bottom: none;
      th {
        font-weight: bold !important;
      }
      tr {
        transition: all ease 0.5s;
        &:nth-of-type(odd) {
          background: #f8f8f8;
        }

        &:hover {
          background: rgba(117, 163, 187, 0.29);
          svg {
            cursor: pointer;
            display: inline;
          }
        }

        td {
          div {
            display: flex;
            justify-content: space-between;

            svg {
              display: none;
            }
          }
        }
      }
      input {
        font-size: 12px;
        text-align: center;
        border-top: none;
        border-left: none;
        border-right: none;
        width: 30px;
      }
    }
  }
  .routine-title {
    display: flex;

    justify-content: space-between;
    align-items: center;

    background: #75a3bb;
    width: 100%;
    color: #fff;
    border-radius: 5px 5px 0px 0px;
    p {
      display: flex;
      margin-top: 10px;
      margin-left: 5px;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #fff;
      color: #000;
    }
    svg {
      cursor: pointer;
      margin: 5px;
    }
  }
  .add_exercice {
    width: 100%;
    height: 20px;
    border: 1px solid #808080;
    border-bottom: none;
    border-top: none;
    text-align: center;
    margin-top: -5px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      background: rgba(117, 163, 187, 0.29);
    }
  }
  .routine-footer {
    text-align: center;
    margin-top: -5px;
    width: 100%;
    margin-bottom: 50px;
    height: 40px;
    border: 1px solid #808080;
    border-top: none;
    border-radius: 0px 0px 5px 5px;

    > div {
      margin: 5px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;
export const ExerciceArea = styled.div`
  background: #fff;
  width: 900px;
  margin-top: 20px;
  padding: 20px;
  grid-template-columns: repeat(7, auto);

  display: grid;
  grid-gap: 10px;

  align-content: center;
  align-items: center;

  .MuiChip-outlinedPrimary {
    color: #93ccea;
    border: 2px solid #93ccea;
  }

  span {
    cursor: pointer;
  }
`;
