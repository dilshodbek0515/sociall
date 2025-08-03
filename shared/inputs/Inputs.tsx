import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View
} from 'react-native'
import { Colors } from '../tokkens'
import { useState } from 'react'
import EyeClosedIcon from '../../assets/icons/icons-closed'
import EyeOpenIcon from '../../assets/icons/icons-open'

export default function Inputs ({
  redError,
  isPassword,
  ...props
}: TextInputProps & { isPassword?: boolean } & { redError: boolean }) {
  const [password, setPassword] = useState<boolean>(false)
  return (
    <View>
      <TextInput
        {...props}
        style={[styles.inputs, redError && { borderColor: Colors.error }]}
        placeholderTextColor={Colors.gray}
        secureTextEntry={isPassword && !password}
      />

      {isPassword && (
        <Pressable
          style={styles.eyeIcons}
          onPress={() => setPassword(prev => !prev)}
        >
          {password ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    height: 46,
    backgroundColor: Colors.light,
    fontSize: 14,
    color: Colors.black,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.boder,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: 'Exo500'
  },
  eyeIcons: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 17
  }
})
