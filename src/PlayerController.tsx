import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Headline, ActivityIndicator} from 'react-native-paper';
import {useQuery} from '@apollo/react-hooks';

import {CardData, PlayerData, PariteGameData} from './PariteSchema';
import {Hand} from './Hand';
import {DrawButton} from './DrawButton';
import {CONTROLLER_PLAYER} from './PariteQueriesMutations';

/**
 * Helper function to get current players hand
 */
const getCurrentPlayerHand = (
  players?: PlayerData[],
  currentPlayer?: PlayerData,
): CardData[] => {
  return (
    players?.find((player?: PlayerData) => player?.id === currentPlayer?.id)
      ?.cards || []
  );
};

interface PlayerControllerProps {
  pariteGameId: number;
  currentPlayer?: PlayerData;
  onPlayerDraw: (deck: CardData[]) => void;
}

export const PlayerController = (props: PlayerControllerProps) => {
  const [currentHand, setCurrentHand] = useState<CardData[]>();
  const {loading, error, data} = useQuery(CONTROLLER_PLAYER, {
    fetchPolicy: 'network-only',
    variables: {pariteGameId: props.pariteGameId},
  });

  if (props?.currentPlayer === undefined) {
    return <Text>No current player</Text>;
  }

  if (loading) return <ActivityIndicator />;

  const playerCards: CardData[] = getCurrentPlayerHand(
    data?.pariteGame?.players,
    props?.currentPlayer,
  );

  const playerDidDraw = (pariteGame: PariteGameData) => {
    // Might not be needed!
    setCurrentHand(
      getCurrentPlayerHand(pariteGame?.players, props?.currentPlayer),
    );
    props.onPlayerDraw(pariteGame.cards);
  };

  return (
    <View style={styles.bottomContainer}>
      <Headline>Controller player | # cards: {currentHand?.length}</Headline>
      <View style={styles.controllerContainer}>
        <Hand cards={playerCards} />
        <DrawButton
          pariteGameId={props.pariteGameId}
          currentPlayer={props.currentPlayer}
          onDrawCard={playerDidDraw}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    padding: 8,
  },
  controllerContainer: {
    flexDirection: 'row',
  },
});
