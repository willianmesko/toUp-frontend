import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
`;

export const Container = styled.div``;

export const WorkoutArea = styled.div`
  width: 700px;
`;

export const WorkoutInfo = styled.div`
  display: flex;
  width: 500px;
  font-size: 14px;
  font-weight: bold;
`;

export const TrainerAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: purple;
  margin-right: 10px;
`;
export const TrainerArea = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  margin-left: 50px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const TraineCard = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  img {
    margin-bottom: 10px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
`;

export const RoutineArea = styled.div`
  display: flex;
  margin-left: -60px;
  align-items: center;

  svg {
    margin-top: -20px;
    cursor: pointer;
  }
`;

export const Routine = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  border-radius: 6px;
  background: #fff;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: space-between;

  ul {
  }
`;

export const ExerciceInfo = styled.div`
  width: 80px;
`;

export const Letter = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: rgb(42, 159, 255);
  font-size: 30px;
  text-align: center;
`;

export const ExerciceArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Exercice = styled.div`
  background: #fff;
  border-radius: 6px;
  width: 300px;
  height: 120px;
  margin-left: 10px;
  margin-bottom: 15px;
  opacity: 0.8;
  cursor: pointer;
  border-left: 6px solid rgb(42, 159, 255);
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    opacity: 1;
  }

  table {
    width: 100%;
    font-size: 14px;
  }
`;
