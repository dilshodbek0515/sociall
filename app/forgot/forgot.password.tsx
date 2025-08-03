import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { Colors, Gap, Padding } from '../../shared/tokkens'

export default function ForgotPassword () {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />
      <View style={styles.content}>
        <View style={styles.top}>
          <Text style={styles.title}>You have received an SMS code</Text>
          <Text style={styles.decription}>
            My SMS-confirmation will be sent to your phone number
          </Text>
          <Pressable style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder='******'
              maxLength={6}
              numberOfLines={1}
              keyboardType='numeric'
            />
          </Pressable>

          <Pressable style={styles.second}>
            <Text>Отправить еще раз:</Text>
            <Text style={styles.time}>00:59</Text>
          </Pressable>
        </View>
        <View style={styles.bottom}>
          <Pressable style={styles.register}>
            <Text style={styles.register_text}>Register</Text>
          </Pressable>
          <Text style={styles.profile}>
            У вас есть профиль? <Text style={styles.vayte}>Войти</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light
  },

  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.padding24,
    paddingVertical: 30
  },

  top: {
    gap: Gap.gap12,
    alignItems: 'center'
  },

  title: {
    fontSize: 32,
    color: Colors.black,
    fontFamily: 'Exo700',
    textAlign: 'center',
    width: 230
  },

  decription: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: 'Exo400',
    textAlign: 'center',
    width: 180
  },

  password: {
    width: '100%',
    height: 54,
    backgroundColor: Colors.password_bg,
    borderRadius: 8,
    paddingHorizontal: 29
  },

  input: {
    width: '100%',
    height: '100%',
    fontSize: 24,
    color: Colors.error_bg,
    letterSpacing: 33,
    fontFamily: 'Exo500'
  },

  second: {
    width: 176,
    height: 32,
    backgroundColor: Colors.send_bg,
    borderRadius: 8,
    textAlign: 'center',
    padding: 8,
    flexDirection: 'row',
    gap: 4
  },

  time: {
    paddingHorizontal: 4,
    backgroundColor: Colors.password_bg,
    borderRadius: 4,
    fontFamily: 'Exo500'
  },

  bottom: {
    gap: 10,
    alignItems: 'center'
  },

  register: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.boder,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  register_text: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.login_btn,
    fontFamily: 'Exo500'
  },

  profile: {
    fontSize: 14,
    color: Colors.login_btn,
    fontFamily: 'Exo400'
  },

  vayte: {
    fontSize: 14,
    color: Colors.outline,
    fontFamily: 'Exo400'
  }
})
