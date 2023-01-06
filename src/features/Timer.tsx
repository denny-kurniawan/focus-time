import { StyleSheet, View, Text, Vibration } from 'react-native';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import Countdown from '../components/Countdown';
import RoundedButton from '../components/RoundedButton';
import Timing from './Timing';
import { sizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

type Props = {
  focusSubject: string;
  onTimerEnd: (string: string) => void;
  clearSubject: React.Dispatch<React.SetStateAction<string>>;
};

const Timer: React.FC<Props> = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState<Boolean>(false);
  const [progress, setProgress] = useState<number>(1);
  const [minutes, setMinutes] = useState<number>(0.1);

  // const onEnd = (reset: Function) => {
  //   Vibration.vibrate(PATTERN);
  //   setIsStarted(false);
  //   setProgress(1);
  //   reset();
  // };

  useEffect(() => {
    if (progress === 0) {
      Vibration.vibrate(PATTERN);
      setIsStarted(false);
      setProgress(1);
      onTimerEnd(focusSubject);
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          // onEnd={onEnd}
        />
        <View style={{ paddingTop: sizes.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: sizes.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: sizes.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={() => clearSubject('')} />
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
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: sizes.xxl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: sizes.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
