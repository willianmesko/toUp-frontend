import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  display: grid;
  margin: 80px;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  height: 200px;

  font-family: 'Baloo Paaji 2', cursive;
`;

export const Athlete = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500&display=swap');
  cursor: pointer;
  background-color: white;
  height: 25rem;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: #000;

  img {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
  }

  > p {
    margin-top: 15px;
    font-size: 1.5em;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    font-size: 1.2em;
  }
  > ul {
    padding: 0;
    list-style: none;
    margin: 1em;

    li {
      display: inline-block;
      margin: 0.15em;
      position: relative;
      font-size: 1em;

      a {
        display: inline-block;
        i {
          color: #fff;
          position: absolute;
          top: 0.95em;
          left: 0.96em;
          transition: all 265ms ease-out;
        }
      }
    }
  }
`;
