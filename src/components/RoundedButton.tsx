import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';

type Props = {
  style?: Object;
  textStyle?: Object;
  size?: number;
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const RoundedButton: React.FC<Props> = ({
  style = {},
  textStyle = {},
  size = 125,
  title = 'Button',
  onPress = undefined,
}) => {
  return (
    <TouchableOpacity style={[ styles(size).radius, style ]} onPress={onPress}>
      <Text style={[ styles(size).text, textStyle ]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default RoundedButton;

const styles = (size: number) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
    fontSize: size / 3,
  },
});
