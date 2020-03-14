import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, ActivityIndicator} from 'react-native-paper';

import {PlayerData, PariteGameData} from './PariteSchema';
import {PLAYER_DRAW} from './PariteQueriesMutations';
import {useMutation} from '@apollo/react-hooks';

interface DrawButtonProps {
  pariteGameId: number;
  currentPlayer?: PlayerData;
  onDrawCard: (pariteGame: PariteGameData) => void;
}

export const DrawButton = (props: DrawButtonProps) => {
  const [playerDraw, {loading, data}] = useMutation(PLAYER_DRAW);

  if (props?.currentPlayer === undefined) {
    return <Text>No current player</Text>;
  }

  if (loading) return <ActivityIndicator />;

  if (data?.playerDraw?.pariteGame) {
    const pariteGame: PariteGameData = data.playerDraw.pariteGame;
    props.onDrawCard(pariteGame);
  }

  const didTapDrawButton = () => {
    playerDraw({
      variables: {
        playerId: props?.currentPlayer?.id,
        pariteGameId: props.pariteGameId,
      },
    });
  };

  return (
    <Button
      style={styles.drawButton}
      mode="contained"
      onPress={didTapDrawButton}>
      Draw
    </Button>
  );
};

const styles = StyleSheet.create({
  drawButton: {
    flex: 1,
  },
});
