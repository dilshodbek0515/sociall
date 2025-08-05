import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors, Gap } from '../../../shared/tokkens'
import LogoutEdit from '../icons/edit'

export default function Logout () {
  const insets = useSafeAreaInsets()
  return (
    <ImageBackground
      style={[styles.container, { paddingTop: insets.top }]}
      source={require('../../../assets/images/logout_bg.png')}
    >
      <StatusBar barStyle={'light-content'} backgroundColor='transparent' />
      <View style={{ padding: 20 }}>
        <View style={styles.logout_header}>
          <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require('../../../assets/images/logout_user.png')}
              resizeMode='contain'
            />
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  fontFamily: 'Exo700',
                  fontSize: 16,
                  color: Colors.light
                }}
              >
                Bruno Pham
              </Text>
              <Text
                style={{
                  fontFamily: 'Exo500',
                  fontSize: 12,
                  color: Colors.personal
                }}
              >
                thanhphamdhbk@gmail.com
              </Text>
            </View>
          </View>
          <Pressable>
            <LogoutEdit />
          </Pressable>
        </View>
      </View>
      <View></View>
      <Pressable>
        <Text>Log Out</Text>
      </Pressable>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    gap: Gap.gap24
  },

  logout_header: {
    height: 88,
    borderRadius: 10,
    backgroundColor: Colors.blur,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
