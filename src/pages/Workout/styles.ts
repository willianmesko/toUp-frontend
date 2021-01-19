import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 85%;
  align-self: center;
  justify-content: center;
  color: #555;
`;

export const RoutineContent = styled.div`
  width: 25%;
  height: 600px;
  display: flex;
  justify-content: center;
`;

export const WorkoutContent = styled.div`
  width: 75%;
  height: 600px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const WorkoutAbout = styled.div`
  width: 85%;
  height: 180px;
  background: #fff;
  border-radius: 6px;
  align-self: flex-start;
`;

export const ExercicesContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const Routines = styled.ul`
  margin-top: 30px;
`;

export const Routine = styled.li`
  background: #fff;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 280px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  border-left: 6px solid rgb(42, 159, 255);
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
    border-left: 8px solid rgb(42, 159, 255);
    border: 2px solid rgb(42, 159, 255);
    color: rgb(42, 159, 255);
    opacity: 1;
  }
`;
