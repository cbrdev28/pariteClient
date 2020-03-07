import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Game = (props: {gameId: number}) => (
  <View style={styles.container}>
    <Text>Home Screen for Game id: {props.gameId}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
