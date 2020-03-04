import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Subheading, DataTable} from 'react-native-paper';

import {PariteGameData} from './PariteSchema';
import {PariteGame} from './PariteGame';

interface PariteGamesProps {
  pariteGames: [PariteGameData];
}
export const PariteGames = (props: PariteGamesProps) => {
  return (
    <View style={styles.container}>
      <Subheading>Tap to join a game</Subheading>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Games</DataTable.Title>
          <DataTable.Title numeric>Players</DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {props.pariteGames.map(pariteGame => (
            <PariteGame key={pariteGame.id} pariteGame={pariteGame} />
          ))}
        </ScrollView>
        <DataTable.Pagination
          page={0}
          numberOfPages={0}
          onPageChange={() => {}}
        />
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
