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
  onCreated: (newUser: UserData) => void;
}

export const CreateUser = (props: CreateUserProps) => {
  const [userText, setUserText] = useState('');
  const [createUser, {loading, data}] = useMutation(CREATE_USER);

  const didTapCreateUser = () => {
    createUser({variables: {name: userText}});
  };

  const userTextDidChange = (userText: string) => {
    setUserText(userText);
  };

  if (loading) return <ActivityIndicator />;
  if (data) {
    if (data?.createUser?.user?.id) {
      const userData: UserData = data.createUser.user;
      props.onCreated(userData);
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
        <TouchableOpacity style={styles.button} onPress={didTapCreateUser}>
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
