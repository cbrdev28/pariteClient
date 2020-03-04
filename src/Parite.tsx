import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {UserData} from './PariteSchema';
import {CreateUser} from './CreateUser';
import {Lobby} from './Lobby';
import {Title} from 'react-native-paper';

export const Parite = () => {
  const [currentUser, setCurrentUser] = useState();

  const didCreateUser = (createdUser: UserData) => {
    setCurrentUser(createdUser);
  };

  return (
    <View style={styles.container}>
      <Title>Play Parite</Title>
      <Lobby user={currentUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
