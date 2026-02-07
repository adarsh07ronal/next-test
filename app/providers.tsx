'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { client } from '../lib/apolloClient';

export function Providers({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}