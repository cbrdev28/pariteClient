import React from 'react';
import {StyleSheet} from 'react-native';
import {Headline, Avatar, Surface, Caption} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';

import {CardData} from './PariteSchema';

interface CardProps {
  card?: CardData;
}

/**
 * The values sent from the server for the color/suit
 */
enum ServerColors {
  Hearts = 'hearts',
  Diamonds = 'diamonds',
  Clubs = 'clubs',
  Spades = 'spades',
}

const getColor = (serverColor: ServerColors): IconSource => {
  switch (serverColor) {
    case ServerColors.Hearts:
      return 'cards-heart';
    case ServerColors.Clubs:
      return 'cards-club';
    case ServerColors.Spades:
      return 'cards-spade';
    case ServerColors.Diamonds:
      return 'cards-diamond';
  }
};

const getValue = (serverValue: number): string => {
  if (serverValue === 1) {
    return 'A';
  }
  if (serverValue < 11) {
    return serverValue.toString();
  }
  if (serverValue === 11) {
    return 'J';
  }
  if (serverValue === 12) {
    return 'Q';
  }
  if (serverValue === 13) {
    return 'K';
  }
  return '?';
};

export const Card = (props: CardProps) => {
  if (props?.card === undefined) {
    return (
      <Surface style={styles.surface}>
        <Avatar.Icon size={40} icon={'lock-question'} />
        <Caption>Empty</Caption>
      </Surface>
    );
  }
  return (
    <Surface style={styles.surface}>
      <Avatar.Icon
        size={40}
        icon={getColor(props.card.color as ServerColors)}
      />
      {/* Make it red or black */}
      <Headline>{getValue(props.card.value)}</Headline>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 12,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 4,
  },
});
