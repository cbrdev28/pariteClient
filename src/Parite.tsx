import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {CurrentUser} from './CurrentUser';
import {CreateUser} from './CreateUser';
import {Lobby} from './Lobby';

interface PariteProps {
  user: CurrentUser;
}

export const Parite = (props: PariteProps) => {
  const [currentUser, setCurrentUser] = useState(props.user);

  const didCreateUser = (createdUser: CurrentUser) => {
    setCurrentUser(createdUser);
  };

  return (
    <View style={styles.container}>
      {currentUser.userId === undefined ? (
        <CreateUser onCreated={didCreateUser} />
      ) : (
        <View>
          <Text>YASS: {currentUser.name}</Text>
        </View>
      )}
      <Lobby user={currentUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 24,
  },
});
