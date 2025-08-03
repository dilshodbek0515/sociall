import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { router, Stack } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
SplashScreen.preventAutoHideAsync()

export default function Layout () {
  useEffect(() => {
    const checkToken = async () => {
      const visited = await AsyncStorage.getItem('visited')
      const data = await AsyncStorage.getItem('token')
      const parsed = data ? JSON.parse(data) : null

      if (!visited) {
        router.replace('/welcome')
      } else if (!parsed?.token) {
        router.replace('/login/login')
      } else {
        router.replace('/')
      }
    }

    checkToken()
  }, [])

  // fonts
  const [loaded, error] = useFonts({
    Exo400: require('../assets/fonts/Exo400.ttf'),
    Exo500: require('../assets/fonts/Exo500.ttf'),
    Exo600: require('../assets/fonts/Exo600.ttf'),
    Exo700: require('../assets/fonts/Exo700.ttf')
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: 'black'
          },
          headerShown: false
        }}
      >
        <Stack.Screen name='index' />
      </Stack>
      <Toast />
    </>
  )
}
