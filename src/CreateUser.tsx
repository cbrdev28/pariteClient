import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

import {UserData} from './PariteSchema';
import {CurrentUser} from './CurrentUser';

const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(input: {name: $name}) {
      user {
        id
        name
      }
    }
  }
`;

interface CreateUserProps {
  onCreated: (newUser: CurrentUser) => void;
}

export const CreateUser = (props: CreateUserProps) => {
  const [createUser, {loading, data}] = useMutation(CREATE_USER);
  const [userText, setUserText] = useState('');

  const didCreateUser = () => {
    createUser({variables: {name: userText}});
  };

  const userTextDidChange = (userText: string) => {
    setUserText(userText);
  };

  if (loading) return <ActivityIndicator />;
  if (data) {
    if (data?.createUser?.user?.id) {
      const userData: UserData = data.createUser.user;
      const newUser: CurrentUser = {
        userId: userData.id,
        name: userData.name,
      };
      props.onCreated(newUser);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Create User</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          value={userText}
          onChangeText={userTextDidChange}
        />
        <TouchableOpacity style={styles.button} onPress={didCreateUser}>
          <Text>Create!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 20,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    minWidth: 64,
    borderWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
  },
});
