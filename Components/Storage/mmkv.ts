import {MMKVLoader} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().withEncryption().initialize();

export const getTheme = () => storage.getString('theme');

export const setTheme = (value: string) => storage.setString('theme', value);
