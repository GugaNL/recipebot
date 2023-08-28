import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import BackButton from './src/components/BackButton';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './src/graphql/apollo/client';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer theme={theme}>
        <ThemeProvider theme={theme}>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerTitleAlign: 'center',
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerLeft: () => <></>, gestureEnabled: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerLeft: props => <BackButton goBack={props.onPress} />,
              }}
            />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
