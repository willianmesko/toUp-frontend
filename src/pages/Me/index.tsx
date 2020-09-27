import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import {
  Container,
  Cover,
  Profile,
  LeftBox,
  RightBox,
  AboutMe,
  Skills,
  Avatar,
  MemberSince,
  Info,
  Bio,
  Tags,
  Tag,
} from './styles';

const Me: React.FC = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Cover>a</Cover>
      <Container>
        <LeftBox>
          <Profile>
            <Avatar>
              <img
                src="https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.0-9/116793868_3401975769853663_97784688088945879_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=bTtYiEapZdoAX8Rj7pf&_nc_ht=scontent.fpoa13-1.fna&oh=7b703c5d9c3d69366a49c12e1816e252&oe=5F95E47D"
                alt="profile"
              />
            </Avatar>
            <Info>
              <h3>Mesko</h3>
              <h6>Porto alegre, rs</h6>
            </Info>
            <MemberSince>mebro desde agosto</MemberSince>
          </Profile>
        </LeftBox>
        <RightBox>
          <Switch
            checked={state}
            onChange={() => setState(!state)}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <AboutMe>
            <h2>Sobre mim</h2>
            <Bio>
              <p>prometo atualizar em breve</p>
            </Bio>
          </AboutMe>
          <Skills>
            <h2>Habilidades</h2>
            <Tags>
              <Tag>emagrecimento</Tag>
              <Tag>hipertrofia</Tag>
              <Tag>aej</Tag>
            </Tags>
          </Skills>
        </RightBox>
      </Container>
    </>
  );
};

export default Me;
