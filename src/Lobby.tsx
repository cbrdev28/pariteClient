import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, ActivityIndicator} from 'react-native-paper';
import {useQuery} from '@apollo/react-hooks';

import {LOBBY} from './PariteQueriesMutations';
import {LobbyData, UserData} from './PariteSchema';

import {Users} from './Users';
import {PariteGames} from './PariteGames';

interface LobbyProps {
  user: UserData;
}

export const Lobby = (props: LobbyProps) => {
  const {loading, error, data} = useQuery(LOBBY);

  if (loading) return <ActivityIndicator />;
  const lobby: LobbyData = data?.lobby;

  return (
    <View style={styles.container}>
      <Title>Play Parité</Title>
      <Users users={lobby?.users} />
      <PariteGames pariteGames={lobby?.pariteGames} />
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
