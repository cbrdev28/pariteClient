// React navigation wants this import at the very top
import 'react-native-gesture-handler';

import React from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './NavigationRef';
import {Parite} from './Parite';

const client = new ApolloClient({
  uri: 'http://10.0.1.34:3000/graphql',
});

export const MainApp = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <PaperProvider>
          <Parite />
        </PaperProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};
