import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'http://192.168.100.5:4003/graphql',
  cache: new InMemoryCache(),
});
