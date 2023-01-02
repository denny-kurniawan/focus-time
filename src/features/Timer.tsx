import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Countdown from '../components/Countdown';
import { sizes } from '../utils/sizes';
import RoundedButton from '../components/RoundedButton';

type Props = {
  focusSubject: string;
  onTimerEnd: Function;
  clearSubject: Function;
};

const Timer: React.FC<Props> = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState<Boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={() => {}}
          onEnd={() => {}}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: sizes.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
