import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  
`;


export const Filters = styled.ul`
height: 50px;
width: 100%;
display: flex;
align-self: flex-end;
input, select {
    width: 50%;
    border-radius: 6px;
    border: none;
    height: 40px;
    background: rgba(242, 243, 245, 0.5);
    margin-left: 5px;
}


`

export const ExercicesArea = styled.ul`
margin-top: 20px;

`


interface ExerciceProps {
  selected: boolean;
}


export const Exercice = styled.li<ExerciceProps>`
  width: 100%;
  height: 120px;
  border-radius: 6px;
  margin-bottom: 10px;
  background: ${props => props.selected ? 'rgba(0, 0, 0, 0.1)' : '#fff'};
  cursor: pointer;
  display: flex;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-left: 6px solid rgb(42, 159, 255);
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
      width: 120px;
      height: 100px;
    }
  }


`
export const PaginationArea = styled.div`
display: flex;
justify-content: center;
height: 50px;
`

