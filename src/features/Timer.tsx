import { StyleSheet, Text, View } from 'react-native';

type Props = {
  focusSubject: string;
  onTimerEnd: Function;
  clearSubject: Function;
};

const Timer: React.FC<Props> = ({ focusSubject, onTimerEnd, clearSubject }) => {
  return (
    <View>
      <Text>Timer</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({});
