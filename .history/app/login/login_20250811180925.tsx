import {
  ActivityIndicator,
  Animated,
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Inputs from '../../shared/inputs/Inputs'
import { Gap, Padding, Colors } from '../../shared/tokkens'
import { useRef, useState } from 'react'
import Google from '../../assets/icons/google'
import Facebook from '../../assets/icons/facebook'
import Iphone from '../../assets/icons/iphone'
import Android from '../../assets/icons/android'
import { Notification } from '../../shared/notifacation/error.notifacation'
import { useAtom } from 'jotai'
import { loginAtom } from '../../entities/auth/model/auth.state'
import Buttons from '../../shared/buttons/Buttons'
import Signup from '../signup/signup'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import LocationPages from '../location'

export default function Login () {
  const [checkbox, setCheckbox] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [active, setActive] = useState<'login' | 'signup'>('signup')
  const [{ isLoading }, setLogin] = useAtom(loginAtom)
  const [showLocationModal, setShowLocationModal] = useState(true)
  const scale = useRef(new Animated.Value(1)).current

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9, // kichrayadi
      useNativeDriver: true
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // qayta kattalashadi
      friction: 3,
      tension: 40,
      useNativeDriver: true
    }).start()
  }
  const [inputValue, setInputValue] = useState({
    email: 'vasia@pupkin.ru',
    password: '12345678'
  })

  const formFile =
    inputValue.email.trim() !== '' && inputValue.password.trim() !== ''

  const showError = (errorText: string) => {
    setError(errorText)
    setTimeout(() => setError(undefined), 5000)
  }

  const submit = () => {
    if (
      inputValue.email !== 'vasia@pupkin.ru' ||
      inputValue.password !== '12345678'
    ) {
      showError('Login or Password error')
    } else {
      setLogin({ email: inputValue.email, password: inputValue.password })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />
      <Notification error={error} />

      {/* Logo */}
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
        resizeMode='contain'
      />

      {/* Location modal */}
      <Modal visible={showLocationModal} transparent animationType='slide'>
        <View style={styles.modalBackground}>
          <LocationPages onClose={() => setShowLocationModal(false)} />
        </View>
      </Modal>

      <View style={styles.content}>
        <Text style={styles.login__title}>Get Started now</Text>
        <Text style={styles.login__description}>
          Create an account or log in to explore about our app
        </Text>
      </View>

      {/* Login / Signup toggle */}
      <View style={styles.pass}>
        <Buttons
          text='Log in'
          isActive={active === 'login'}
          onPress={() => setActive('login')}
        />
        <Buttons
          text='Sign up'
          isActive={active === 'signup'}
          onPress={() => setActive('signup')}
        />
      </View>

      {active === 'login' && (
        <>
          <View style={styles.collection}>
            {/* Email */}
            <View>
              <Text style={styles.email_text}>Email</Text>
              <Inputs
                value={inputValue.email}
                placeholder='Enter your email'
                onChangeText={value =>
                  setInputValue(prev => ({ ...prev, email: value }))
                }
                redError={!!error}
              />
            </View>

            {/* Password */}
            <View>
              <Text style={styles.email_text}>Password</Text>
              <Inputs
                isPassword
                placeholder='Enter your password'
                keyboardType='numeric'
                value={inputValue.password}
                onChangeText={value =>
                  setInputValue(prev => ({ ...prev, password: value }))
                }
                redError={!!error}
              />
            </View>

            {/* Checkbox + Forgot */}
            <View style={styles.checked}>
              <Pressable
                style={styles.flex}
                onPress={() => setCheckbox(!checkbox)}
              >
                <View style={[styles.checkbox, checkbox && styles.checkedBox]}>
                  {checkbox && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.label}>Remember me</Text>
              </Pressable>
              <Text
                onPress={() => router.replace('/forgot/forgot.password')}
                style={styles.forgot}
              >
                Forgot Password?
              </Text>
            </View>
          </View>

          {/* Login button */}
          <Animated.View style={{ transform: [{ scale }] }}>
            <Pressable
              onPress={submit}
              style={[
                styles.login_btn,
                { backgroundColor: formFile ? Colors.active_btn : Colors.boder }
              ]}
              disabled={!formFile}
            >
              <Text
                style={[
                  styles.login_text,
                  { color: formFile ? Colors.light : Colors.login_btn }
                ]}
              >
                {!isLoading ? (
                  'Log in'
                ) : (
                  <ActivityIndicator color={Colors.light} size='large' />
                )}
              </Text>
            </Pressable>
          </Animated.View>

          {/* Divider */}
          <View style={styles.line}>
            <View style={styles.to__line} />
            <Text style={styles.with}>Or login with</Text>
            <View style={styles.to__line} />
          </View>

          {/* Social logins */}
          <View style={styles.applications}>
            <View style={styles.app__child}>
              <Google />
            </View>
            <View style={styles.app__child}>
              <Facebook />
            </View>
            <View style={styles.app__child}>
              <Iphone />
            </View>
            <View style={styles.app__child}>
              <Android />
            </View>
          </View>
        </>
      )}

      {active === 'signup' && <Signup />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
    padding: Padding.padding24,
    gap: Gap.gap24,
    paddingTop: 24
  },
  collection: {
    width: '100%',
    gap: Gap.gap16
  },
  content: {
    gap: Gap.gap12
  },
  logo: {
    width: 27
  },
  login__title: {
    color: Colors.black,
    fontSize: 32,
    fontFamily: 'Exo700',
    textAlign: 'center'
  },
  login__description: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: 'Exo400',
    textAlign: 'center',
    width: 200
  },
  pass: {
    flexDirection: 'row',
    width: '100%',
    height: 36,
    backgroundColor: Colors.pass,
    borderRadius: 7,
    padding: 2
  },
  email_text: {
    fontSize: 12,
    fontFamily: 'Exo500',
    color: Colors.gray,
    marginBottom: 2
  },
  checked: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  login_btn: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  login_text: {
    fontSize: 14,
    fontFamily: 'Exo500'
  },

  line: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  with: {
    fontFamily: 'Exo400',
    color: Colors.gray,
    fontSize: 12
  },
  to__line: {
    borderWidth: 0.5,
    backgroundColor: Colors.boder,
    width: '33%'
  },
  applications: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  app__child: {
    width: 70,
    height: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1.5,
    borderColor: Colors.gray,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light
  },
  checkedBox: {
    backgroundColor: Colors.outline,
    borderColor: Colors.outline
  },
  checkmark: {
    color: Colors.light,
    fontSize: 8,
    fontWeight: 'bold'
  },
  label: {
    color: Colors.gray,
    fontFamily: 'Exo500',
    fontSize: 12
  },
  forgot: {
    color: Colors.forgot,
    fontFamily: 'Exo600',
    fontSize: 12
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
