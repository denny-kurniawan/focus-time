import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import RoundedButton from '../components/RoundedButton';

type Props = {};

const Focus: React.FC<Props> = () => {
  const [subject, setSubject] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={subject}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
