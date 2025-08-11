import { useState, useEffect, useRef } from 'react'
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  Animated
} from 'react-native'
import * as Device from 'expo-device'
import * as Location from 'expo-location'
import { Colors } from '../../shared/tokkens'

export default function LocationPages ({ onClose }: { onClose: () => void }) {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // Bosilganda locatsiya ruxsati va GPS yoqilishini tekshirish
  const requestLocation = async () => {
    if (Platform.OS === 'android' && !Device.isDevice) {
      setErrorMsg(
        'Oops, bu Android emulatorda ishlamaydi. Iltimos, haqiqiy qurilmada sinab ko‘ring!'
      )
      return
    }

    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Iltimos, location ruxsatini yoqing!')
      return
    }

    const gpsEnabled = await Location.hasServicesEnabledAsync()
    if (!gpsEnabled) {
      setErrorMsg('Iltimos, telefoningizda GPS-ni yoqing!')
      return
    }

    let loc = await Location.getCurrentPositionAsync({})
    setLocation(loc)
    onClose()
  }

  let text = 'Allow maps to access your location while you use the app?'
  if (errorMsg) {
    text = errorMsg
  }

  const scaleSkip = useRef(new Animated.Value(1)).current
  const scaleAllow = useRef(new Animated.Value(1)).current

  // const onPressIn = () => {
  //   Animated.spring(scale, {
  //     toValue: 0.9,
  //     useNativeDriver: true
  //   }).start()
  // }

  // const onPressOut = () => {
  //   Animated.spring(scale, {
  //     toValue: 1,
  //     friction: 3,
  //     tension: 40,
  //     useNativeDriver: true
  //   }).start()
  // }

  // const inAllow = () => {
  //   Animated.spring(scaleAllow, {
  //     toValue: 0.9,
  //     useNativeDriver: true
  //   }).start()
  // }

  // const outAllow = () => {
  //   Animated.spring(scaleAllow, {
  //     toValue: 1,
  //     friction: 3,
  //     tension: 40,
  //     useNativeDriver: true
  //   }).start()
  // }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 147, height: 116, objectFit: 'contain' }}
        source={require('../../assets/images/location-icon.png')}
      />
      <Text style={styles.paragraph}>Location</Text>
      <Text style={styles.paragraph_text}>{text}</Text>

      <Animated.View
        style={{ transform: [{ scale: scaleAllow }], width: '100%' }}
      >
        <Pressable
          style={styles.allow}
          onPressIn={() =>
            Animated.spring(scaleAllow, {
              toValue: 0.9,
              useNativeDriver: true
            }).start()
          }
          onPressOut={() =>
            Animated.spring(scaleAllow, {
              toValue: 1,
              friction: 3,
              tension: 40,
              useNativeDriver: true
            }).start()
          }
          onPress={requestLocation}
        >
          <Text
            style={{ color: Colors.light, fontSize: 14, fontFamily: 'Exo500' }}
          >
            Allow
          </Text>
        </Pressable>
      </Animated.View>

      <Animated.View
        style={{ transform: [{ scale: scaleSkip }], width: '100%' }}
      >
        <Pressable
          style={styles.skip}
          onPressIn={() =>
            Animated.spring(scaleSkip, {
              toValue: 0.9,
              useNativeDriver: true
            }).start()
          }
          onPressOut={() =>
            Animated.spring(scaleSkip, {
              toValue: 1,
              friction: 3,
              tension: 40,
              useNativeDriver: true
            }).start()
          }
          onPress={onClose}
        >
          <Text
            style={{ color: '#5151C6', fontSize: 14, fontFamily: 'Exo500' }}
          >
            Skip for now
          </Text>
        </Pressable>
      </Animated.View>
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
    backgroundColor: Colors.light,
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
    backgroundColor: '#5151C6', // gradient RN’da default ishlamaydi
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
