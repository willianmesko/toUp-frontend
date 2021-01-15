import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1333px;
  h1 {
    font-weight: bold;
  }
`;

export const ExerciceCard = styled.div`
  width: 400px;
  height: 150px;
  border-radius: 6px;
  margin-left: 10px;
  margin-bottom: 10px;
  background: #fff;
  cursor: pointer;
  display: flex;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);

  &:hover {
      opacity: 0.8;
    }

  .thumbnail {
 
    align-items: center;
    align-content: center;
    display: flex;
    margin: 10px;
    border-radius: 2px;
    img {
      width: 150px;
      height: 120px;
    }
  }

  .exerciceInfo {
    display: flex;
    color: #555;
    margin: 10px;
    flex-direction: column;
    width: 250px;

    p{
      font-size: 14px;
      font-weight: 20;
    }

    .exerciceExtraInfo {
      display: flex;
      align-self: flex-end;
      font-size: 10px;
      span {
        margin:10px;
      }
      svg {
       
       display: block;
      }
    }
   }
`;

export const SearchField = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 15px;
  align-content: flex-end;
  margin-bottom: 15px;
  justify-content: space-around;
  input,
  select {
    padding: 12px;
    margin: 10px;
    height: 50px;
    border-radius: 50px;
    width: 400px;
    border: none;
    color: #555;
    
   &:focus {
     border: 2px solid rgb(42, 159, 255);
      transition: all ease 0.25s; 
    }
    option {
        width: 100px;
       
      
    }
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

export const GroupMuscleFilter = styled.div`
  display: flex;
`;
export const GroupMuscle = styled.div`
  margin-left: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
