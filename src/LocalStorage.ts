import AsyncStorage from '@react-native-community/async-storage';
import {UserData} from './PariteSchema';

const USER_ID_KEY = 'USER_ID';
const USER_NAME_KEY = 'USER_NAME';

export const getCurrentUser = async (): Promise<UserData | undefined> => {
  try {
    const userId = await AsyncStorage.getItem(USER_ID_KEY);
    const userName = await AsyncStorage.getItem(USER_NAME_KEY);
    if (userId == null || userName == null) {
      return undefined;
    }
    const user: UserData = {
      id: Number(userId),
      name: userName,
    };
    return user;
  } catch (error) {
    console.warn('LocalStorage: ', error);
  }
};

export const setCurrentUser = async (user: UserData) => {
  try {
    AsyncStorage.setItem(USER_ID_KEY, user.id.toString());
    AsyncStorage.setItem(USER_NAME_KEY, user.name);
  } catch (error) {
    console.warn('LocalStorage: ', error);
  }
};
