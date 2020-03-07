import React from 'react';
import {Alert} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useMutation} from '@apollo/react-hooks';
import {PlayerData, UserData} from './PariteSchema';
import {JOIN_PARITE_GAME} from './PariteQueriesMutations';

interface JoinGameProps {
  gameId: number;
  currentUser: UserData;
  currentPlayer?: PlayerData;
  onPlayerJoined: (joinedPlayer: PlayerData) => void;
}

export const JoinGame = (props: JoinGameProps) => {
  const [joinPariteGame, {loading, data, error}] = useMutation(
    JOIN_PARITE_GAME,
  );

  if (props?.currentPlayer?.id != undefined) {
    return <></>;
  }

  if (error) {
    Alert.alert('Could not join game');
  }

  if (loading) return <ActivityIndicator />;

  const responsePlayers: PlayerData[] =
    data?.joinPariteGame?.pariteGame?.players;

  if (Array.isArray(responsePlayers)) {
    const joinedPlayer = responsePlayers.find(
      player => player.user.id === props.currentUser.id,
    );
    if (!joinedPlayer) {
      console.error('Could not find current users as joined player');
      return <></>;
    }
    props.onPlayerJoined(joinedPlayer);
    return <></>;
  } else {
    joinPariteGame({
      variables: {userId: props.currentUser.id, pariteGameId: props.gameId},
    });
    return <ActivityIndicator />;
  }
};
