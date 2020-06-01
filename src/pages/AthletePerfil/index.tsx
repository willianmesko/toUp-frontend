import React from 'react';
import { useAthlete } from '~/hooks/AthleteContext';
import { Container, Content, Cards, Card } from './styles';

const AthletePerfil: React.FC = () => {
  const { athlete } = useAthlete();

  return (
    <Container>
      <Cards>
        <Card />
        <Card />
      </Cards>

      <Content></Content>
    </Container>
  );
};

export default AthletePerfil;
