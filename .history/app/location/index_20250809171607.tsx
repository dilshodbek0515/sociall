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
      <Text style={styles.paragraph_text}>{text}</Text>

      <Pressable style={styles.allow}>
        <Text
          style={{ color: Colors.light, fontSize: 14, fontFamily: 'Exo500' }}
        >
          Allow
        </Text>
      </Pressable>

      <Pressable style={styles.skip}>
        <Text style={{ color: '#5151C6', fontSize: 14, fontFamily: 'Exo500' }}>
          Skip for now
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 316,
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
    fontFamily: 'Exo600',
    marginTop: 24,
    marginBottom: 20
  },

  paragraph_text: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.gray,
    fontFamily: 'Exo500',
    width: 220,
    marginBottom: 25
  },

  allow: {
    width: '100%',
    height: 36,
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    backgroundColor: 'linear-gradient(270.95deg, #888BF4 0%, #5151C6 100%)',
    marginBottom: 25
  },

  skip: {
    width: '100%',
    height: 36,
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#5151C6'
  }
})
