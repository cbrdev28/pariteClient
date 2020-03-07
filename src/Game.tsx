import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Headline, ActivityIndicator, Text} from 'react-native-paper';
import {useQuery} from '@apollo/react-hooks';

import {PARITE_GAME} from './PariteQueriesMutations';
import {UserData, PlayerData} from './PariteSchema';
import {JoinGame} from './JoinGame';

interface GameProps {
  gameId: number;
  currentUser: UserData;
}

export const Game = (props: GameProps) => {
  const [currentPlayer, setCurrentPlayer] = useState<PlayerData>();
  const {loading, error, data, refetch} = useQuery(PARITE_GAME, {
    fetchPolicy: 'network-only',
    variables: {pariteGameId: props.gameId},
  });

  if (loading) return <ActivityIndicator />;

  const players: PlayerData[] = data?.pariteGame?.players || [];
  const hasJoined: boolean = players.find(
    player => player.user.id === props.currentUser.id,
  )
    ? true
    : false;

  const playerAutoJoin = (joinedPlayer: PlayerData) => {
    setCurrentPlayer(joinedPlayer);
    refetch;
  };

  return (
    <View style={styles.container}>
      <Headline>Home Screen for Game id: {props.gameId}</Headline>
      <Headline>Current user name: {props.currentUser.name}</Headline>
      <Headline>Players: </Headline>
      <View>
        <Text>Joker!</Text>
        {players.map(player => (
          <Text key={player.id}>
            {player.id} - {player.user.name}
          </Text>
        ))}
      </View>

      {/* Only render this component if the user has not already joined as a player */}
      {!hasJoined && !currentPlayer && (
        <JoinGame
          gameId={props.gameId}
          currentUser={props.currentUser}
          currentPlayer={currentPlayer}
          onPlayerJoined={playerAutoJoin}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
