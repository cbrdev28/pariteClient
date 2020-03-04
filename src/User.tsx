import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Text, Surface} from 'react-native-paper';

import {UserData} from './PariteSchema';

interface UserProps {
  user: UserData;
}
export const User = (props: UserProps) => {
  return (
    <Surface style={styles.surface}>
      {/* <Text>{props.user.id}</Text> */}
      <Avatar.Icon size={40} icon="account" />
      <Text>{props.user.name}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 4,
  },
});
