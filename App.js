import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { StartGameScreen } from './screens';

export default function App() {
  return (
    <LinearGradient colors={['#101020', '#101060']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar hidden={true} />
        <StartGameScreen />
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
