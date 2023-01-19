import { useState } from 'react';
import { Alert, TextInput, View, StyleSheet } from 'react-native';

import { Card, InstructionText, PrimaryButton, Title } from '../components/ui';

import { Colors } from '../constants';

const StartGameScreen = ({ onSetUserNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleNumberInput = (number) => {
    !isNaN(number) && number > 0 && number < 100 && setEnteredNumber(number);
  };

  const handleConfirm = () => {
    if (isNaN(enteredNumber) || enteredNumber < 1 || enteredNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number betwee 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => setEnteredNumber(''),
          },
        ]
      );

      return;
    }

    onSetUserNumber(enteredNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          value={enteredNumber}
          onChangeText={handleNumberInput}
          style={styles.numberInput}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={() => setEnteredNumber('')} color="#711">
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={handleConfirm} color="#171">
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
