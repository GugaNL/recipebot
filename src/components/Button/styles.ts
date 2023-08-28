import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green};
  width: 300px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 26px;
  margin-left: 5px;
`;
