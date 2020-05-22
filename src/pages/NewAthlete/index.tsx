import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Athlete } from '~/components/AthleteCard/styles';
import athleteLogo from '~/assets/athlete-logo.jpg';
const NewAthlete: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  return (
    <>
      <Container>
        <div className="left-side">
          <div className="athlete-avatar">
            <img src={athleteLogo} alt="Athlete" />
          </div>
        </div>
        <div className="right-side">
          <div className="register-athlete">
            <Form ref={formRef} onSubmit={() => {}}>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
              <input placeholder="nome"></input>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewAthlete;
