import {
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
import { useState } from 'react';
import Timer from './src/features/Timer';

const App: React.FC = () => {
  const [currentSubject, setCurrentSubject] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
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
