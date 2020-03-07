import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Headline} from 'react-native-paper';

import {UserData} from './PariteSchema';

interface GameProps {
  gameId: number;
  currentUser: UserData;
}

export const Game = (props: GameProps) => (
  <View style={styles.container}>
    <Headline>Home Screen for Game id: {props.gameId}</Headline>
    <Headline>Current user name: {props.currentUser.name}</Headline>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
