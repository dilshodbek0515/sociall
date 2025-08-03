import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../shared/tokkens'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Alias () {
  const animated = new Animated.Value(1)

  const colors = animated.interpolate({
    inputRange: [0.9, 1],
    outputRange: [Colors.active_btn, Colors.active_btn]
  })

  const startAnimate = () => {
    Animated.timing(animated, {
      toValue: 0.9,
      duration: 200,
      useNativeDriver: true
    }).start()
  }

  const finishAnimate = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.notfound__img}
        source={require('../assets/images/notfound.png')}
      />

      <Text style={styles.alias}>404 Not Found</Text>

      <Link href={'/'} onPressIn={startAnimate} onPressOut={finishAnimate}>
        <Animated.View
          style={{
            ...styles.go__btn,
            backgroundColor: colors,
            transform: [{ scale: animated }]
          }}
        >
          <Text style={styles.btn_text}>Go to home</Text>
        </Animated.View>
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light
  },

  notfound__img: {
    width: '100%',
    height: 270
  },

  alias: {
    color: Colors.outline,
    fontSize: 32,
    fontFamily: 'Exo500',
    marginBottom: 37
  },

  go__btn: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.active_btn,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn_text: {
    fontFamily: 'Exo500',
    fontSize: 14,
    color: Colors.light,
    textAlign: 'center'
  }
})
