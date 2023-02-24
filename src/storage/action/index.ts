import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACTION_COLLECTION} from '../storageConfig';

export const actionCreate = async (newAction: string) => {
  try {
    const storedActions = await actionGetAll();

    const storage = JSON.stringify([...storedActions, newAction]);

    await AsyncStorage.setItem(ACTION_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};

export const actionGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(ACTION_COLLECTION);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
};
