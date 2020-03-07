import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, ActivityIndicator} from 'react-native-paper';
import {useQuery} from '@apollo/react-hooks';

import {LOBBY} from './PariteQueriesMutations';
import {LobbyData, UserData} from './PariteSchema';

import {Users} from './Users';
import {PariteGames} from './PariteGames';
import {CurrentUser} from './CurrentUser';
import {CreateUser} from './CreateUser';

interface LobbyProps {
  user: UserData;
  onUserCreated: (createdUser: UserData) => void;
  onPariteGameSelected: () => void;
}

export const Lobby = (props: LobbyProps) => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const {loading, error, data, refetch} = useQuery(LOBBY, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <ActivityIndicator />;
  const lobby: LobbyData = {...data?.lobby};

  return (
    <View style={styles.container}>
      <Title>Play Parité</Title>
      <CurrentUser
        user={props?.user}
        onPress={() => {
          setShowCreateUser(true);
        }}
      />
      <Users users={lobby?.users} currentUserId={props?.user?.id} />
      <PariteGames
        pariteGames={lobby?.pariteGames}
        onGameSelected={props.onPariteGameSelected}
      />

      {/* CreateUser is a modal */}
      <CreateUser
        visible={props?.user?.id === undefined && showCreateUser}
        onCreated={user => {
          props.onUserCreated(user);
          refetch;
        }}
        onDismiss={() => {
          setShowCreateUser(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
