import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import RoundedButton from '../components/RoundedButton';
import { sizes } from '../utils/sizes';

type Props = {
  addSubject: React.Dispatch<React.SetStateAction<string>>;
};

const Focus: React.FC<Props> = ({ addSubject }) => {
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
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
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
    marginRight: sizes.sm,
  },
  inputContainer: {
    padding: sizes.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
