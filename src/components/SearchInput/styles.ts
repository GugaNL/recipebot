import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 10px;
`;

export const Icon = styled(Feather)`
  font-size: 32px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
`;
