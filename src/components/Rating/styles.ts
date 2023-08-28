import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconStar = styled(FontAwesome)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.yellow};
`;
