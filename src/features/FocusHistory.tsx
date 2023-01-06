import { StyleSheet, Text, View } from 'react-native';

type Props = {
  history: string[];
};

const FocusHistory: React.FC<Props> = ({ history }) => {
  return (
    <View>
      <Text>Focus History</Text>
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({});
