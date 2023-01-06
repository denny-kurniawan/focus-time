import { Platform, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Focus from './src/features/Focus';
import Timer from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';
import { colors } from './src/utils/colors';

const App: React.FC = () => {
  const [currentSubject, setCurrentSubject] = useState<string>('');
  const [history, setHistory] = useState<string[]>(['temp']);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSubject('')}
        />
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
