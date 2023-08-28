import React from 'react';
import {
  BottomTitle,
  Container,
  Logo,
  MainTitle,
  SplashBackground,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import logo from '../../assets/imgs/logo.png';
import splashBackgroundImg from '../../assets/imgs/splash.png';
import { ScreenNavigationProp } from '../../interfaces';

const Splash = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <SplashBackground source={splashBackgroundImg}>
      <Container>
        <Logo source={logo} />
        <Title>Encontre e monte receitas deliciosas</Title>
      </Container>
      <Container>
        <MainTitle>Comece agora</MainTitle>
      </Container>
      <Container>
        <BottomTitle>Seja seu próprio chef</BottomTitle>
        <Button onPress={() => navigate('Home')}>Comece a cozinhar</Button>
      </Container>
    </SplashBackground>
  );
};

export default Splash;
