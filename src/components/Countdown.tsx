import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { sizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min: number) => min * 1000 * 60;

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

type Props = {
  minutes: number;
  isPaused: Boolean;
  onProgress: Function;
  onEnd: Function;
};

const Countdown: React.FC<Props> = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}) => {
  const interval = useRef<any>(null);

  const [millis, setMillis] = useState<number>(0);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: sizes.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
