import { useState, useEffect } from 'react'
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable
} from 'react-native'

import * as Device from 'expo-device'

import * as Location from 'expo-location'
import { Colors } from '../../shared/tokkens'

export default function LocationPages () {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    async function getCurrentLocation () {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        )
        return
      }
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    }

    getCurrentLocation()
  }, [])

  let text = 'Allow maps to access your location whiloe you use the app?'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 147, height: 116, objectFit: 'contain' }}
        source={require('../../assets/images/location-icon.png')}
      />
      <Text style={styles.paragraph}>Location</Text>
      <Text style={styles.paragraph}>{text}</Text>
      <Pressable>
        <Text>Allow</Text>
      </Pressable>
      <Pressable>
        <Text>Skip for now</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 440,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    top: 116
  },

  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.black,
    fontFamily: 'Exo600'
  }
})
