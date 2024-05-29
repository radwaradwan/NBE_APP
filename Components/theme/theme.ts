import {getTheme} from '../Storage/mmkv';
import {GetTheme} from '../theme/themes';

const  themeTmp = getTheme() ?? 'Light';

console.log('nnnnnnnnnnnnnnnn',themeTmp);


export const theme = GetTheme(themeTmp);


