import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  margin-top: 35px;
`;
