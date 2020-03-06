import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import {UserData} from './PariteSchema';
import {Lobby} from './Lobby';

export const Parite = () => {
  const [currentUser, setCurrentUser] = useState();

  const didCreateUser = (createdUser: UserData) => {
    setCurrentUser(createdUser);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Lobby user={currentUser} onUserCreated={didCreateUser} />
      </SafeAreaView>
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
