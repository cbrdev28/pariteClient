import React from 'react';
import {DataTable} from 'react-native-paper';

import {PariteGameData} from './PariteSchema';

interface PariteGameProps {
  pariteGame: PariteGameData;
}
export const PariteGame = (props: PariteGameProps) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{props.pariteGame.title}</DataTable.Cell>
      <DataTable.Cell numeric>{props.pariteGame.players.length}</DataTable.Cell>
    </DataTable.Row>
  );
};
