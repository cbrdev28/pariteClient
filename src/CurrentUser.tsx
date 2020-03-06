import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Text, Surface, Caption} from 'react-native-paper';

import {UserData} from './PariteSchema';

interface CurrentUserProps {
  user: UserData;
  onPress?: () => void;
}
export const CurrentUser = (props: CurrentUserProps) => {
  if (props?.user?.id) {
    return (
      <Surface style={styles.surface}>
        <Avatar.Icon size={40} icon={'account-circle'} />
        <Text>{props.user.name}</Text>
      </Surface>
    );
  } else {
    return (
      <TouchableOpacity onPress={props?.onPress}>
        <Surface style={styles.surface}>
          <Avatar.Icon size={40} icon={'account-question'} />
          <Caption>Tap to choose a user name</Caption>
        </Surface>
      </TouchableOpacity>
    );
  }
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
