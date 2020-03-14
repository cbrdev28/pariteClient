import React, {useState, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import * as NavigationRef from './NavigationRef';

import {UserData} from './PariteSchema';
import {Lobby} from './Lobby';
import {Game} from './Game';
import * as LocalStorage from './LocalStorage';

const StackNavigator = createStackNavigator();

export const Parite = () => {
  const [currentUser, setCurrentUser] = useState();
  const [currentGameId, setCurrentGameId] = useState();

  useEffect(() => {
    if (currentUser) {
      return;
    }
    LocalStorage.getCurrentUser().then(localUserData => {
      if (!localUserData) {
        // Nothing!!
      } else {
        setCurrentUser(localUserData);
      }
    });
  });

  const didCreateUser = (createdUser: UserData) => {
    LocalStorage.setCurrentUser(createdUser);
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
