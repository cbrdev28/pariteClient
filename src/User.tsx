import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Text, Surface} from 'react-native-paper';

import {UserData} from './PariteSchema';

interface UserProps {
  user: UserData;
  isCurrentUser?: boolean;
}
export const User = (props: UserProps) => {
  return (
    <Surface style={styles.surface}>
      <Avatar.Icon
        size={40}
        icon={props.isCurrentUser ? 'account-circle' : 'account'}
      />
      <Text>{props.user.name}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    padding: 8,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 4,
  },
});
