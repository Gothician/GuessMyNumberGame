import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  numberContainer: {
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: Colors.number100,
  },
  numberText: {
    color: Colors.number100,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: 'bold',
  },
});
