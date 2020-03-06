import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {
  Portal,
  Modal,
  Surface,
  Headline,
  TextInput,
  Button,
} from 'react-native-paper';

import {useMutation} from '@apollo/react-hooks';

import {UserData} from './PariteSchema';
import {CREATE_USER} from './PariteQueriesMutations';

interface CreateUserProps {
  visible: boolean;
  onDismiss: () => void;
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
    if (
      data?.createUser?.user?.id &&
      Array.isArray(data?.createUser?.user?.lobby?.users)
    ) {
      const userData: UserData = data.createUser.user;
      props.onCreated(userData);
    }
  }

  return (
    <Portal>
      <Modal visible={props.visible} onDismiss={props.onDismiss}>
        <Surface style={styles.surface}>
          <View style={styles.container}>
            <Headline>Choose a user name</Headline>
            <TextInput
              style={styles.textInput}
              label="User name"
              value={userText}
              onChangeText={userTextDidChange}
            />
            <Button
              icon={'account-plus'}
              mode="contained"
              disabled={!userText}
              onPress={didTapCreateUser}>
              Done
            </Button>
          </View>
        </Surface>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  surface: {
    marginTop: -128,
    paddingVertical: 8,
    marginHorizontal: 28,
    elevation: 8,
    borderRadius: 8,
  },
  container: {
    alignItems: 'center',
  },
  textInput: {
    marginVertical: 8,
    alignSelf: 'stretch',
  },
});
