import {TextStyle} from 'react-native';
import {ViewStyle} from 'react-native';

export type BigButtonProps = {
  onPressButton?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  title:string
};
