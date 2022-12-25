import { Platform, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
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
