import {TouchableOpacityProps} from 'react-native';
import {ButtonTypeProps} from './styled';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  type: ButtonTypeProps;
};
