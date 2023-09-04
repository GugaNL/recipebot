import { ApolloClient, InMemoryCache } from '@apollo/client';
//import { BASE_URL } from '../../utils/constants';

export const apolloClient = new ApolloClient({
  //uri: 'http://192.168.100.5:4003/graphql',
  uri: 'https://promomaniadigital.com.br/graphql',
  cache: new InMemoryCache(),
});
