import { Pressable, StatusBar, StyleSheet, Text } from 'react-native'
import { Colors, Gap, Padding } from '../../shared/tokkens'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import Checkbox from 'expo-checkbox'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
export default function Privacy () {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChecked = () => {
    if (!checked) {
      Toast.show({
        type: 'error',
        text1: 'Diqqat!',
        text2: 'Davom etish uchun rozilik belgilang',
        position: 'top',
        visibilityTime: 4000
      })
    } else {
      Toast.show({
        type: 'success',
        text1: 'Muvaffaqiyatli!',
        text2: 'Siz rozilik berdingiz',
        position: 'top',
        visibilityTime: 4000
      })
      router.replace('/login/login')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />

      <Text style={styles.privacy}>Privacy Policy</Text>

      <Text style={styles.text}>
        - We respect your privacy and collect the following information: - Your
        IP address – to improve security and quality of service.
      </Text>

      <Text style={styles.text}>
        - Location data – to improve the application's functionality (if you
        allow it).
      </Text>

      <Text style={styles.text}>
        - Search and activity history – to provide you with relevant services.
        This information is used only to improve the application and ensure
        security.
      </Text>

      <Text style={styles.text}>
        - Your information is not sold to third parties. You have the right to
        access and change your information.
      </Text>

      <Pressable style={styles.checkbox} onPress={() => setChecked(!checked)}>
        <Checkbox
          value={checked}
          onValueChange={setChecked}
          color={checked ? Colors.likes : Colors.gray}
        />
        <Text style={styles.checked_text}>
          Men maxfiylik siyosatiga roziman
        </Text>
      </Pressable>

      <Pressable style={styles.next__btn} onPress={handleChecked}>
        <Text style={styles.buttonText}>Davom etish</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    padding: Padding.padding24,
    gap: Gap.gap24,
    paddingTop: 30
  },

  privacy: {
    color: Colors.btnText,
    fontSize: 30,
    fontFamily: 'Exo500'
  },

  text: {
    color: Colors.black,
    fontFamily: 'Exo500',
    fontSize: 16
  },

  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 30
  },

  checked_text: {
    fontSize: 14,
    fontFamily: 'Exo500',
    color: Colors.black
  },

  next__btn: {
    backgroundColor: Colors.gray,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8
  },

  buttonText: {
    color: Colors.light,
    fontSize: 16,
    fontFamily: 'Exo600'
  }
})
