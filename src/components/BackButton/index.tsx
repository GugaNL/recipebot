import React from 'react';
import { Container, Icon } from './styles';

type BackButtonProps = {
  goBack: any;
};

const BackButton = ({ goBack }: BackButtonProps) => {
  return (
    <Container onPress={goBack}>
      <Icon name="chevron-left" />
    </Container>
  );
};

export default BackButton;
