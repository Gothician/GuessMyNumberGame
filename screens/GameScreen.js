import { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { NumberContainer } from '../components/game';
import { PrimaryButton, Title } from '../components/ui';

const generateRandomBetween = (min, max, exclude = 0) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
};

const boundaries = { min: 1, max: 100 };

const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );

  const handleGuessButtons = (direction) => {
    // Check wrong input
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't cheating", `You number is ${userNumber}`, [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    // Set new boundaries and generate new number
    direction === 'lower'
      ? (boundaries.max = currentGuess)
      : (boundaries.min = currentGuess + 1);
    const newGuess = generateRandomBetween(
      boundaries.min,
      boundaries.max,
      currentGuess
    );
    // Check if number is guessed
    newGuess == userNumber ? onGameOver(true) : setCurrentGuess(newGuess);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => handleGuessButtons('higher')}>
            HIGHER
          </PrimaryButton>
          <PrimaryButton onPress={() => handleGuessButtons('lower')}>
            LOWER
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
