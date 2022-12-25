import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

type Props = {};

const Focus: React.FC<Props> = () => {
  const [subject, setSubject] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={subject}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 50,
    justifyContent: 'flex-start',
  },
  text: {
    color: colors.white,
  },
});
