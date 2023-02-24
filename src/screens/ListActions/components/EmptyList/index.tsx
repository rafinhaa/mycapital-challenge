import React from 'react';

import {Container, EmptyIcon, Subtitle, Title} from './styles';

export const EmptyList: React.FC = () => {
  return (
    <Container>
      <EmptyIcon />
      <Title>Não foi encontrada nenhuma ação</Title>
      <Subtitle>Cadastre algumas primeiro</Subtitle>
    </Container>
  );
};
