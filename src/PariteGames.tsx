import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Headline, DataTable} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {PariteGameData} from './PariteSchema';
import {PariteGame} from './PariteGame';

interface PariteGamesProps {
  pariteGames: PariteGameData[];
  onGameSelected: (pariteGameId: number) => void;
}
export const PariteGames = (props: PariteGamesProps) => {
  const didTapPariteGame = (pariteGameId: number) => {
    props.onGameSelected(pariteGameId);
  };

  return (
    <View style={styles.container}>
      <Headline>Tap to join a game</Headline>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Games</DataTable.Title>
          <DataTable.Title numeric>Players</DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {props?.pariteGames?.map(pariteGame => (
            <TouchableOpacity
              key={pariteGame.id}
              onPress={() => didTapPariteGame(pariteGame.id)}>
              <PariteGame pariteGame={pariteGame} />
            </TouchableOpacity>
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
