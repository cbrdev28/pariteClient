import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const QUERY_LOBBY = gql`
  {
    lobby {
      id
      title
      users {
        id
        name
      }
      pariteGames {
        id
        title
        cards {
          id
          faceUp
          color
          value
        }
        players {
          user {
            name
          }
          cards {
            id
            value
            color
            faceUp
          }
        }
      }
    }
  }
`;

export const Parite = () => {
  const {loading, error, data} = useQuery(QUERY_LOBBY);

  return (
    <View style={styles.container}>
      {loading === true ? <ActivityIndicator /> : <Text>YASS</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
