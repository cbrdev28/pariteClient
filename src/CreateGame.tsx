import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Portal,
  Modal,
  Surface,
  Headline,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native-paper';

interface CreateGameProps {
  visible: boolean;
  onDismiss: () => void;
}

export const CreateGame = (props: CreateGameProps) => {
  return (
    <Portal>
      <Modal visible={props.visible} onDismiss={props.onDismiss}>
        <Surface style={styles.surface}>
          <View style={styles.container}>
            <Headline>Choose a user name</Headline>
            <TextInput
              style={styles.textInput}
              label="User name"
              value={''}
              onChangeText={() => {}}
            />
            <Button
              icon={'account-plus'}
              mode="contained"
              disabled={false}
              onPress={() => {}}>
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
    marginTop: -160,
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
