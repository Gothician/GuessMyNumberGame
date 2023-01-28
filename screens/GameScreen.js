import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NumberContainer, GuessLogItem } from '../components/game';
import { Card, InstructionText, PrimaryButton, Title } from '../components/ui';
import { Colors } from '../constants';

const generateRandomBetween = (min, max, exclude = 0) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
};

const boundaries = { min: 1, max: 100 };

const GameScreen = ({ userNumber, setGameRounds, onGameOver }) => {
  const [rounds, setRounds] = useState(1);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(boundaries.min, boundaries.max, userNumber)
  );
  const [currentGameRounds, setcurrentGameRounds] = useState([]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    boundaries.min = 1;
    boundaries.max = 100;
  }, []);

  useEffect(() => {
    setcurrentGameRounds((prev) => [currentGuess, ...prev]);

    if (currentGuess == userNumber) {
      setGameRounds(currentGameRounds.length + 1);
      onGameOver(true);
    }
  }, [currentGuess]);

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

    setRounds((prev) => ++prev);
    setCurrentGuess(newGuess);
  };

  const guessRoundsListLength = currentGameRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={() => handleGuessButtons('lower')}>
              <Ionicons
                name="chevron-down-circle-outline"
                size={24}
                color={Colors.accent500}
              />
            </PrimaryButton>
          </View>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={() => handleGuessButtons('higher')}>
              <Ionicons
                name="chevron-up-circle-outline"
                size={24}
                color={Colors.accent500}
              />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={() => handleGuessButtons('lower')}>
              <Ionicons
                name="chevron-down-circle-outline"
                size={24}
                color={Colors.accent500}
              />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={() => handleGuessButtons('higher')}>
              <Ionicons
                name="chevron-up-circle-outline"
                size={24}
                color={Colors.accent500}
              />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View
        style={
          width > 500
            ? [styles.listContainer, { padding: 0 }]
            : styles.listContainer
        }
      >
        <FlatList
          data={currentGameRounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  InstructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  buttonItem: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
