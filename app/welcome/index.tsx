import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { Colors } from '../../shared/tokkens'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcome () {
  useEffect(() => {
    const checkVisited = async () => {
      const visited = await AsyncStorage.getItem('visited')
      if (visited) {
        router.replace('/login/login')
      }
    }
    checkVisited()
  }, [])

  const handleStart = async () => {
    await AsyncStorage.setItem('visited', 'true')
    router.replace('/login/login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.welcome__img}
        source={require('../../assets/images/welcome__img.png')}
        resizeMode='contain'
      />
      <Text style={styles.title}>SHARE - INSPIRE - CONNECT</Text>
      <Pressable onPress={handleStart} style={styles.started}>
        <Text style={styles.btnText}>GET STARTED</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.welcome,
    padding: 15
  },

  welcome__img: {
    width: '100%',
    height: 422
  },

  title: {
    fontSize: 14,
    fontFamily: 'Exo500',
    color: Colors.light,
    marginTop: 20,
    marginBottom: 46
  },

  started: {
    backgroundColor: Colors.welcome__btn,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30
  },

  btnText: {
    color: Colors.light,
    fontSize: 16,
    fontFamily: 'Exo700'
  }
})
