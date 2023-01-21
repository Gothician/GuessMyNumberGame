import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-splash-screen';

import { StartGameScreen, GameScreen, GameOverScreen } from './screens';

import { Colors } from './constants';

export default function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [gameRounds, setGameRounds] = useState([]);
  // Set initial screen
  const [screen, setScreen] = useState();

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const handleStartNewGame = () => {
    setIsGameOver(false);
    setUserNumber(0);
    setGameRounds([]);
  };

  // Choose screen to display
  useEffect(() => {
    if (isGameOver) {
      setScreen(
        <GameOverScreen
          roundsNumber={gameRounds.length}
          userNumber={userNumber}
          onStartNewGame={() => handleStartNewGame()}
        />
      );
    } else if (!userNumber) {
      setScreen(<StartGameScreen onSetUserNumber={setUserNumber} />);
    } else {
      setScreen(
        <GameScreen
          userNumber={userNumber}
          gameRounds={gameRounds}
          setGameRounds={setGameRounds}
          onGameOver={setIsGameOver}
        />
      );
    }
  }, [userNumber, isGameOver]);

  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }
    } catch (e) {
      console.log(e);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={[Colors.shade100, Colors.shade200]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar hidden={true} />
        <SafeAreaView style={styles.rootScreen}>
          {/* display  screen */}
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#101030',
  },
  backgroundImage: {
    opacity: 0.55,
  },
});
