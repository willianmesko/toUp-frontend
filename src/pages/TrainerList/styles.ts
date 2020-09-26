import styled from 'styled-components';

export const Container = styled.div`

  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  text-align: center;
  
}
`;

export const TrainerContainer = styled.ul`
  list-style: none;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
`;

export const Filters = styled.div`
  background: blue;
  width: 300px;
  height: 100%;
  position: fixed;
  right: 0;
`;

export const Trainer = styled.li`
  display: flex;
  border-radius: 6px;
  background-color: #fff;
  width: 600px;
  height: 300px;
  border-left: 5px solid #93ccea; ;
`;

export const PerfilArea = styled.div`
  width: 70%;
`;

export const ContractArea = styled.div`
  width: 30%;
  padding: 10px;
  button {
    outline: none;
    background: #1c3f7f;
    color: #fff;
    border: none;
    border-radius: 15px;
    width: 120px;
    height: 40px;
  }
`;

export const Tags = styled.div`
  ul {
    display: flex;
    li {
      background: #93ccea;
      width: 100px;
      height: 20px;
      border-radius: 10px;
      font-size: 12px;
      color: #fff;
      margin: 5px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  margin-left: 0;
  padding: 10px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid #93ccea;
  }
`;

export const Description = styled.div`
  padding: 10px;
  font-size: 13px;
`;
