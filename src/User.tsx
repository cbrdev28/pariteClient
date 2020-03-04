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
      {/* <Avatar.Icon size={28} icon="folder" /> */}
      <Text>{props.user.name}</Text>
    </Surface>
    // <Text>{props.user.name}</Text>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    // height: 80,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
