import styled from 'styled-components';


export const Container = styled.div`
   width: 1500px;
   margin: 30px 0 0 120px;
  display: flex;
  flex-direction: column;
 
`;


export const Content = styled.div`
 

  display: flex;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  letter-spacing: 2px;
  margin: 10px;
  color: #474747;
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  text-align: center;
  letter-spacing: 2px;
  margin: 10px;
  color: #6f6f6f;
`;

export const Plans = styled.div`
  background: #fff;
  width: 280px;
  height: 550px;
  border: 1px solid #f1eef1;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  &:hover {
    -webkit-box-shadow: 1px -2px 14px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px -2px 14px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 1px -2px 14px 1px rgba(0, 0, 0, 0.75);
  }
`;

export const PlanTitle = styled.h4`
  font-weight: bold;
  text-align: center;
  margin: 15px 0 30px 0;
`;
export const PlanPrice = styled.p`
  font-size: 30px;
  color: #ff5000;
  font-weight: 300;

  text-align: center;
`;

export const PlanInfo = styled.p`
  font-size: 17px;
  text-align: center;
  font-weight: 300;
`;

export const PlanAbout = styled.ul`
  margin-bottom: 20px;

  color: gray;
  font-weight: 400;
  li {
    margin: 10px;
    svg {
      color: green;
    }
  }
`;

export const Button = styled.div`
  align-self: center;
  width: 150px;
  height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  line-height: 40px;
  background-color: rgb(42, 159, 255);
`;
