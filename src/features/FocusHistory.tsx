import { StyleSheet, Text, View, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';

type Props = {
  history: string[];
};

const FocusHistory: React.FC<Props> = ({ history }) => {
  if (!history || !history.length) return null;

  const renderItem = ({ item }: { item: string }) => (
    <Text style={styles.item}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  container: {
    padding: sizes.lg,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: sizes.md,
    color: colors.white,
    paddingTop: sizes.sm,
  },
});
