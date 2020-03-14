import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Headline, ActivityIndicator, Text, Button} from 'react-native-paper';
import {useQuery} from '@apollo/react-hooks';

import {PARITE_GAME} from './PariteQueriesMutations';
import {UserData, PlayerData, CardData} from './PariteSchema';
import {JoinGame} from './JoinGame';
import {PlayerController} from './PlayerController';

interface GameProps {
  gameId: number;
  currentUser: UserData;
}

export const Game = (props: GameProps) => {
  const [currentPlayer, setCurrentPlayer] = useState<PlayerData>();
  const [currentDeck, setCurrentDeck] = useState<CardData[]>();

  const {loading, error, data, refetch} = useQuery(PARITE_GAME, {
    fetchPolicy: 'network-only',
    variables: {pariteGameId: props.gameId},
  });

  if (loading) return <ActivityIndicator />;

  const players: PlayerData[] = data?.pariteGame?.players || [];
  const currentPlayerData = players.find(player => {
    if (player.user.id == props.currentUser.id) {
      return player;
    }
  });
  const hasJoined: boolean = !(currentPlayerData == null);

  const playerAutoJoin = (joinedPlayer: PlayerData) => {
    setCurrentPlayer(joinedPlayer);
    refetch;
  };

  const playerDidDraw = (newDeck: CardData[]) => {
    setCurrentDeck(newDeck);
    refetch;
  };

  const refreshQuerry = () => {
    refetch;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Button onPress={refreshQuerry}>Refresh</Button>
        <View style={styles.topContainer}>
          <Headline>Home Screen for Game id: {props.gameId}</Headline>
          <Text>Cards in deck: {currentDeck?.length}</Text>
          <Headline>
            Current user name: {props.currentUser.id} - {props.currentUser.name}
          </Headline>
          <Headline>Players: </Headline>
          <View>
            <Text>Joker!</Text>
            {players.map(player => (
              <Text key={player.id}>
                {player.id} - {player.user.name}
              </Text>
            ))}
          </View>
        </View>

        <PlayerController
          pariteGameId={props.gameId}
          currentPlayer={currentPlayer || currentPlayerData}
          onPlayerDraw={playerDidDraw}
        />

        {/* Only render this component if the user has not already joined as a player */}
        {hasJoined === true ? null : (
          <JoinGame
            gameId={props.gameId}
            currentUser={props.currentUser}
            currentPlayer={currentPlayer}
            onPlayerJoined={playerAutoJoin}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
});
