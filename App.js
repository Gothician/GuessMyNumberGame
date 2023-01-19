import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { StartGameScreen, GameScreen, GameOverScreen } from './screens';

import { Colors } from './constants';

export default function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [userNumber, setUserNumber] = useState();
  // Set initial screen
  const [screen, setScreen] = useState(
    <StartGameScreen onSetUserNumber={setUserNumber} />
  );

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  // Choose screen to display
  useEffect(() => {
    userNumber &&
      setScreen(
        <GameScreen userNumber={userNumber} onGameOver={setIsGameOver} />
      );
    isGameOver && setScreen(<GameOverScreen />);
  }, [userNumber, isGameOver]);

  return (
    <LinearGradient
      colors={[Colors.shade100, Colors.shade200]}
      style={styles.rootScreen}
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
