import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import ApolloClient from 'apollo-boost';

import {Parite} from './Parite';
import {ApolloProvider} from '@apollo/react-hooks';
import {CurrentUser} from './CurrentUser';

const client = new ApolloClient({
  uri: 'http://10.0.1.34:3000/graphql',
});

export const MainApp = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Play Parite</Text>
          <ApolloProvider client={client}>
            <Parite user={CurrentUser.get()} />
          </ApolloProvider>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
  },
});
