import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CardData} from './PariteSchema';
import {Card} from './Card';

interface HandProps {
  cards: CardData[];
}

export const Hand = (props: HandProps) => {
  const Cards = [1, 2, 3, 4].map((number, index) => (
    <Card key={index} card={props?.cards[index] || undefined} />
  ));
  return <View style={styles.handContainer}>{Cards}</View>;
};

const styles = StyleSheet.create({
  handContainer: {
    flexDirection: 'row',
  },
});
