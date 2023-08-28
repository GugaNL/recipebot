import React from 'react';
import { ButtonIcon, Container, Title } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Title>{children}</Title>
      <ButtonIcon name="arrow-right" />
    </Container>
  );
};

export default Button;
