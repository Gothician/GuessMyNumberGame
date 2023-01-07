import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonItem}>
          <PrimaryButton color="#711">Reset</PrimaryButton>
        </View>
        <View style={styles.buttonItem}>
          <PrimaryButton color="#171">Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#303010',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonItem: {
    flex: 1,
  },
});
