import { BtnType } from '../../entities/auth/model/interface/interface'
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from '../tokkens'

export default function Buttons ({
  text,
  isLoading,
  isActive,
  onPress,
  ...props
}: BtnType) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.btns, isActive && styles.active__btn]}
      {...props}
    >
      {!isLoading ? (
        <Text style={[styles.btn__text, isActive && styles.active__text]}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator color={'white'} size={'large'} />
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btns: {
    backgroundColor: Colors.pass,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%'
  },

  active__btn: {
    backgroundColor: Colors.light
  },

  btn__text: {
    color: Colors.gray,
    fontFamily: 'Exo500',
    fontSize: 14
  },

  active__text: {
    color: Colors.btnText
  }
})
