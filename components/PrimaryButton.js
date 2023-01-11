import { Text, View, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, color, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#22223c' }}
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                { backgroundColor: color },
                styles.pressed,
              ]
            : [styles.buttonInnerContainer, { backgroundColor: color }]
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#88883c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
