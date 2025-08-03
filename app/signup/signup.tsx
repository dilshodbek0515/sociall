import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors, Gap } from '../../shared/tokkens'
import { useState } from 'react'
import EyeOpenIcon from '../../assets/icons/icons-open'
import EyeClosedIcon from '../../assets/icons/icons-closed'
import IntlPhoneInput from 'react-native-intl-phone-input'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Signup () {
  const [password, setPassword] = useState<boolean>(false)

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  })

  const isValid =
    form.name.trim() !== '' &&
    form.lastName.trim() !== '' &&
    form.email.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.password.trim() !== ''

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullname}>
        <View style={styles.name}>
          <Text style={styles.name__title}>Name</Text>
          <TextInput
            style={styles.name__input}
            placeholder='Enter name'
            placeholderTextColor={Colors.gray}
            onChangeText={text => setForm(prev => ({ ...prev, name: text }))}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.name__title}>Last Name</Text>
          <TextInput
            style={styles.name__input}
            placeholder='Enter last name'
            placeholderTextColor={Colors.gray}
            onChangeText={text =>
              setForm(prev => ({ ...prev, lastName: text }))
            }
          />
        </View>
      </View>

      <View style={styles.email}>
        <Text style={styles.name__title}>Email</Text>
        <TextInput
          style={styles.name__input}
          placeholder='Enter your email'
          placeholderTextColor={Colors.gray}
          onChangeText={text => setForm(prev => ({ ...prev, email: text }))}
        />
      </View>

      <View style={styles.phone}>
        <Text style={styles.name__title}>Phone Number</Text>
        <IntlPhoneInput
          defaultCountry='UZ'
          containerStyle={styles.inputContainer}
          phoneInputStyle={styles.input}
          onChangeText={({ phoneNumber }: { phoneNumber: string }) =>
            setForm(prev => ({ ...prev, phone: phoneNumber }))
          }
        />
      </View>

      <View style={styles.password}>
        <Text style={styles.name__title}>Set Password</Text>
        <TextInput
          style={styles.name__input}
          placeholder='Enter your password'
          placeholderTextColor={Colors.gray}
          secureTextEntry={!password}
          onChangeText={text => setForm(prev => ({ ...prev, password: text }))}
        />
        <Pressable
          style={styles.eyeIcons}
          onPress={() => setPassword(prev => !prev)}
        >
          {password ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Pressable>
      </View>

      <Pressable
        onPress={() => router.push('/privacy/privacy')}
        style={[
          styles.login_btn,
          {
            backgroundColor: isValid ? Colors.active_btn : Colors.boder
          }
        ]}
        disabled={!isValid}
      >
        <Text
          style={[
            styles.login_text,
            {
              color: isValid ? Colors.light : Colors.login_btn
            }
          ]}
        >
          Register
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    gap: Gap.gap16
  },

  fullname: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Gap.gap16
  },

  name: {
    width: '45%',
    gap: 2
  },

  name__title: {
    fontFamily: 'Exo500',
    fontSize: 12,
    color: Colors.gray
  },

  name__input: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.boder,
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
    color: Colors.black,
    fontFamily: 'Exo500'
  },

  email: {
    width: '100%',
    gap: 2
  },

  phone: {
    width: '100%',
    gap: 2
  },

  password: {
    width: '100%',
    gap: 2
  },

  eyeIcons: {
    position: 'absolute',
    right: 0,
    top: '25%',
    paddingHorizontal: 24,
    paddingVertical: 17
  },

  login_btn: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.boder,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  login_text: {
    fontSize: 14,
    color: Colors.login_btn,
    fontFamily: 'Exo500'
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.boder,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#fff'
  },

  input: {
    fontSize: 14
  }
})
