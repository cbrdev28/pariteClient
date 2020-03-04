import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import ApolloClient from 'apollo-boost';
import {Provider as PaperProvider} from 'react-native-paper';

import {Parite} from './Parite';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://10.0.1.34:3000/graphql',
});

export const MainApp = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <PaperProvider>
          <Parite />
        </PaperProvider>
      </ApolloProvider>
    </>
  );
};
