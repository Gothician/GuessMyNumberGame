import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text
        style={[styles.itemText, { marginRight: 10 }]}
      >{`# ${roundNumber}:`}</Text>
      <Text style={styles.itemText}>{`Opponent's Guess: ${guess}`}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 3,
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
