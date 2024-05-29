import {MMKVLoader} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().withEncryption().initialize();

export const getTheme = () => storage.getString('theme');
export const getUsername = () => storage.getString('username');
export const getPhoneNumber = () => storage.getString('phoneNumber');



export const setUserName = (value: string) =>
    storage.setString('username', value);

export const setPhoneNumber = (value: string) =>
    storage.setString('phoneNumber', value);

export const setTheme = (value: string) => storage.setString('theme', value);
