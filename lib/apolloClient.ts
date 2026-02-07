import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://develop.api.samansa.com/graphql',
  cache: new InMemoryCache(),
});