import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Colors, Padding } from '../../../shared/tokkens'
import Footer_home_icon from '../../../assets/icons/footer_home_icon'
import Footer_profile_icon from '../../../assets/icons/footer-profile_icons'
import Footer_friends_icon from '../../../assets/icons/footer_friends_icon'
import Footer_like_icon from '../../../assets/icons/footer_like'
import Footer_search_icon from '../../../assets/icons/footer_search_icons'
import { useState } from 'react'
import { router } from 'expo-router'

export default function Profile () {
  const [activePage, setActivePage] = useState<string>('Profile')
  const colors = Colors.light
  const choiceHome = () => {
    setActivePage('Home')
    router.push('/')
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        style={styles.profile_header_bg}
        source={require('../../../assets/images/profile_header_bg_img.png')}
        resizeMode='cover'
      >
        <Text>Username</Text>
      </ImageBackground>

      <View style={styles.footer}>
        <Pressable
          onPress={choiceHome}
          style={[
            styles.footer_content,
            activePage === 'Home' && { backgroundColor: Colors.likes }
          ]}
        >
          <Footer_home_icon colors={colors} activePage={activePage} />
        </Pressable>
        <Pressable
          onPress={() => setActivePage('Search')}
          style={[
            styles.footer_content,
            activePage === 'Search' && { backgroundColor: Colors.likes }
          ]}
        >
          <Footer_search_icon colors={colors} activePage={activePage} />
        </Pressable>
        <Pressable
          onPress={() => router.push('/welcome')}
          style={[
            styles.footer_content,
            activePage === 'Likes' && { backgroundColor: Colors.likes }
          ]}
        >
          <Footer_like_icon colors={colors} activePage={activePage} />
        </Pressable>
        <Pressable
          onPress={() => setActivePage('Friends')}
          style={[
            styles.footer_content,
            activePage === 'Friends' && { backgroundColor: Colors.likes }
          ]}
        >
          <Footer_friends_icon colors={colors} activePage={activePage} />
        </Pressable>
        <Pressable
          onPress={() => setActivePage('Profile')}
          style={[
            styles.footer_content,
            activePage === 'Profile' && { backgroundColor: Colors.likes }
          ]}
        >
          <Footer_profile_icon colors={colors} activePage={activePage} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    justifyContent: 'space-between'
  },

  profile_header_bg: {
    width: '100%',
    height: 150
  },

  footer: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.light,
    elevation: 10,
    paddingHorizontal: Padding.padding24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 30px'
  },

  footer_content: {
    width: 44,
    height: 44,
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    gap: 2
  }
})
