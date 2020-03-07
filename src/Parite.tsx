import React, {useState} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import * as NavigationRef from './NavigationRef';

import {UserData} from './PariteSchema';
import {Lobby} from './Lobby';
import {Game} from './Game';

const StackNavigator = createStackNavigator();

export const Parite = () => {
  const [currentUser, setCurrentUser] = useState();
  const [currentGameId, setCurrentGameId] = useState();

  const didCreateUser = (createdUser: UserData) => {
    setCurrentUser(createdUser);
  };

  const didTapPariteGame = (pariteGameId: number) => {
    setCurrentGameId(pariteGameId);
    NavigationRef.navigate('Game', {});
  };

  return (
    <StackNavigator.Navigator initialRouteName="Lobby">
      <StackNavigator.Screen name="Lobby">
        {() => (
          <Lobby
            user={currentUser}
            onUserCreated={didCreateUser}
            onPariteGameSelected={didTapPariteGame}
          />
        )}
      </StackNavigator.Screen>
      <StackNavigator.Screen name="Game">
        {() => <Game gameId={currentGameId} currentUser={currentUser} />}
      </StackNavigator.Screen>
    </StackNavigator.Navigator>
  );
};
