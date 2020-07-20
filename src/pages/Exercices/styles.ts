import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1333px;
`;

export const ExerciceCard = styled.div`
  width: 400px;
  height: 150px;
  border-radius: 6px;
  margin-left: 10px;
  margin-bottom: 10px;
  background: #fff;
  cursor: pointer;

  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const SearchField = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 15px;
  align-content: flex-end;

  justify-content: space-around;
  input {
    padding: 12px;
    height: 50px;
    border-radius: 5px;
    width: 400px;
    border: 2px solid rgb(135, 134, 139);
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
