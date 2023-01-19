import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    padding: 24,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: Colors.number100,
  },
  numberText: {
    color: Colors.number100,
    fontFamily: 'open-sans-bold',
    fontSize: 36,
    // fontWeight: 'bold',
  },
});
