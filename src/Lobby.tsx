import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {CurrentUser} from './CurrentUser';
import {LobbyData} from './PariteSchema';

const LOBBY = gql`
  {
    lobby {
      id
      title
      users {
        id
        name
      }
      pariteGames {
        id
        title
        cards {
          id
          faceUp
          color
          value
        }
        players {
          id
          ready
          user {
            name
          }
        }
      }
    }
  }
`;

interface LobbyProps {
  user: CurrentUser;
}

export const Lobby = (props: LobbyProps) => {
  const {loading, error, data} = useQuery(LOBBY);

  if (loading) return <ActivityIndicator />;
  const lobby: LobbyData = data?.lobby;

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Lobby</Text>
      <View style={styles.container}>
        <Text>Users:</Text>
        <View style={styles.separator} />
        {lobby?.users.map(user => (
          <View style={styles.userContainer} key={user.id}>
            <Text>{user.id}. </Text>
            <Text
              style={props.user.userId == user.id ? styles.currentUser : {}}>
              {user.name}
            </Text>
          </View>
        ))}
      </View>
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
  separator: {
    backgroundColor: 'black',
    height: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentUser: {
    fontWeight: 'bold',
    color: 'green',
  },
});
