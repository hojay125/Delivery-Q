import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@${key}`, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${key}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return false;
  }
};

export const ToastShort = (msg) => {
    Toast.show(msg);
};
  
export const ToastLong = (msg) => {
    Toast.show(msg, Toast.LONG);
};


