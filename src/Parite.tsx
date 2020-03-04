import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {UserData} from './PariteSchema';
import {CreateUser} from './CreateUser';
import {Lobby} from './Lobby';

export const Parite = () => {
  const [currentUser, setCurrentUser] = useState();

  const didCreateUser = (createdUser: UserData) => {
    setCurrentUser(createdUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play Parite</Text>
      {currentUser?.userId === undefined ? (
        <CreateUser onCreated={didCreateUser} />
      ) : (
        <Text>YASS: {currentUser.name}</Text>
      )}
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
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 24,
  },
});
