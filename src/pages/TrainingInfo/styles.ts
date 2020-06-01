import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  background: #fff;
  width: 900px;
  padding: 20px;
  flex-wrap: wrap;
  display: flex;

  margin-top: 30px;
  border-radius: 6px;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const Routine = styled.div`
  width: 400px;
  min-height: 200px;
  max-height: 500px;
  table {
    font-size: 12px;
    cursor: pointer;
    input {
      font-size: 12px;
      text-align: center;
      border-style: none;
      width: 30px;
    }
    #series {
      width: 10px;
    }
  }
  .routine-title {
    display: flex;

    justify-content: space-between;
    background: #75a3bb;
    width: 100%;
    color: #fff;
    border-radius: 5px 5px 0px 0px;

    svg {
      cursor: pointer;
      margin: 5px;
    }
  }
  .routine-footer {
    text-align: center;

    width: 100%;
    margin-top: -18px;

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

  /* span {
    cursor: pointer;
    padding: 15px 15px;
    border-radius: 50%;
    border: 0;
    margin-left: auto;
    transition: all ease 0.2s;

    &:hover {
      background: rgba(106, 161, 169, 0.29);
    }
  } */
`;
