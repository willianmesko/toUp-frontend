import React, { useState } from 'react';
import { Container, Title, Subtitle, Plans, PlanTitle, PlanPrice, PlanInfo, PlanAbout, Button } from './styles';
import { FiCheck } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
const UpgradePlan = () => {

  const [plans] = useState([1, 2, 3, 4]);
  return (

    <>
      <Title>Conheça nossos planos</Title>
      <Subtitle>Você está no plano FREE, assine um de nossos planos quando desejar.</Subtitle>
      <Container>


        {plans && plans.map(plan => {
          return (
            <Plans>
              <PlanTitle >
                Free
          </PlanTitle>

              <PlanPrice >
                Grátis
          </PlanPrice>
              <PlanInfo>
                Até 2 alunos

          </PlanInfo>
              <PlanAbout >
                <li><FiCheck fontSize={20} fontWeight={1000} color={'green'} /> Crie exercícios</li>
                <li><FiCheck fontSize={20} fontWeight={1000} color={'green'} /> Receba de seus clientes</li>
                <li><FiCheck fontSize={20} fontWeight={1000} color={'green'} /> Venda com link</li>
                <li><FiCheck fontSize={20} fontWeight={1000} color={'green'} /> Página de vendas</li>
                <li><AiOutlineClose fontSize={20} fontWeight={1000} color={'red'} />Crie treinadores adicionais</li>
                <li><AiOutlineClose fontSize={20} fontWeight={1000} color={'red'} />Altere as cores do app</li>
                <li><AiOutlineClose fontSize={20} fontWeight={1000} color={'red'} /> Adicione até 5 imagens</li>
                <li><FiCheck fontSize={20} fontWeight={1000} color={'green'} />Entrega automática</li>
              </PlanAbout>
              <Button>Contratar</Button>
            </Plans>
          )
        })}

      </Container>
    </>
  )
};

export default UpgradePlan;
