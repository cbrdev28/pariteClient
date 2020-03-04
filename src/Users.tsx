import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Subheading} from 'react-native-paper';

import {UserData} from './PariteSchema';
import {User} from './User';

interface UsersProps {
  users: [UserData];
}
export const Users = (props: UsersProps) => {
  return (
    <View style={styles.container}>
      <Subheading>Users</Subheading>
      <View style={styles.userContainer}>
        <ScrollView horizontal={true}>
          {props?.users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
