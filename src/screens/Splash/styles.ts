import styled from 'styled-components/native';

export const SplashBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View`
  padding: 45px 60px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 15px 10px;
`;

export const MainTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

export const BottomTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 25px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
`;
