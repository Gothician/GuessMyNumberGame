import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { StartGameScreen, GameScreen } from './screens';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  // Choose screen to display
  const screen = userNumber ? (
    <GameScreen />
  ) : (
    <StartGameScreen onSetUserNumber={setUserNumber} />
  );

  return (
    <LinearGradient colors={['#101020', '#101060']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar hidden={true} />
        {/* display corresponding screen */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#101030',
  },
  backgroundImage: {
    opacity: 0.55,
  },
});
