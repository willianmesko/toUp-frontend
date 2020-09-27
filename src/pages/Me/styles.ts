import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1343px;
  width: 100%;

  align-content: center;

  align-self: center;
`;

export const Cover = styled.div`
  width: 1600px;
  height: 250px;
  background: rgb(42, 159, 255);
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background: rgb(42, 159, 255);
  margin-left: 10px;
  text-align: center;
`;

export const Profile = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 6px;
  background: white;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;

  justify-content: space-between;
`;

export const MemberSince = styled.div`
  height: 50px;
  width: 100%;
  border-top: 1px solid black;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutMe = styled.div`
  width: 800px;
  height: 250px;
  border-radius: 6px;
  background: #fff;
  padding: 25px;
`;

export const Bio = styled.div`
  margin-top: 30px;
`;

export const Skills = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 20px;
  border-radius: 6px;
  background: #fff;
  padding: 25px;
`;

export const LeftBox = styled.div`
  width: 40%;
`;

export const RightBox = styled.div`
  width: 60%;
  margin-left: -80px;
  margin-top: 30px;
`;

export const Avatar = styled.div`
  margin-top: 50px;
  img {
    border-radius: 50%;
    width: 200px;
  }
`;
