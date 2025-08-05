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
import LogoutBack from '../icons/logback'
import Log from '../icons/log'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../../entities/auth/model/auth.state'

export default function Logout () {
  const insets = useSafeAreaInsets()
  const logout = useSetAtom(logoutAtom)
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

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Privacy
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Lorem
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Lorem
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Lorem
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Lorem
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Change password
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Lorem
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>

      <View style={{ gap: 16, width: '70%' }}>
        <Pressable style={styles.logout_childs}>
          <Text
            style={{ fontFamily: 'Exo500', fontSize: 16, color: Colors.light }}
          >
            Lorem
          </Text>
          <Pressable style={styles.logout_back}>
            <LogoutBack />
          </Pressable>
        </Pressable>
      </View>
      <Pressable
        onPress={logout}
        style={{ paddingHorizontal: 20, marginTop: 14 }}
      >
        <View style={styles.logout_btn}>
          <Log />
          <Text>Log Out</Text>
        </View>
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
  },

  logout_childs: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.blur,
    paddingVertical: 6,
    paddingLeft: 20,
    paddingRight: 6,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },

  logout_back: {
    width: 30,
    height: 30,
    backgroundColor: '#FFFFFF33',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logout_btn: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    width: 101,
    height: 36,
    backgroundColor: Colors.light,
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 14
  }
})
