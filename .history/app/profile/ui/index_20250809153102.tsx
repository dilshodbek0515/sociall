import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
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
import { useRef, useState } from 'react'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Settings from './settings'
import Sideber from '../../sidebar/sidebar'
export default function Profile () {
  const [activePage, setActivePage] = useState<string>('Profile')
  const [shorts, setShorts] = useState<string>('shorts')
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const slideAnimation = useRef(
    new Animated.Value(Dimensions.get('window').width)
  ).current
  const insets = useSafeAreaInsets()
  const colors = Colors.light

  const choiceHome = () => {
    setActivePage('Home')
    router.push('/')
  }
  const choiceSearch = () => {
    setActivePage('Search')
    router.push('/search/ui')
  }

  const openSidebar = () => {
    setShowSidebar(true)
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }

  const closedSidebar = () => {
    Animated.timing(slideAnimation, {
      toValue: Dimensions.get('window').width,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      setShowSidebar(false)
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <ImageBackground
        style={[styles.profile_header_bg, { paddingTop: insets.top }]}
        source={require('../../../assets/images/profile_header_bg_img.png')}
        resizeMode='cover'
      >
        <View style={styles.top_content}>
          <Text style={styles.username}>@brunopham</Text>
          <Pressable onPress={openSidebar}>
            <Settings />
          </Pressable>
        </View>

        <Image
          style={{
            position: 'absolute',
            top: '90%',
            left: '50%',
            transform: [{ translateX: '-50%' }]
          }}
          source={require('../../../assets/images/profile_user.png')}
          resizeMode='contain'
        />
      </ImageBackground>

      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 14,
          marginTop: 50,
          height: 500,
          gap: 6
        }}
      >
        <Text style={styles.name}>Bruno Pham</Text>
        <Text style={styles.countriy}>Da Nang, Vietnam</Text>
        <View style={styles.follows}>
          <View style={styles.followers}>
            <Text style={styles.follow_count}>220</Text>
            <Text style={styles.follow_title}>Followers</Text>
          </View>
          <View style={styles.followers}>
            <Text style={styles.follow_count}>150</Text>
            <Text style={styles.follow_title}>Following</Text>
          </View>
        </View>

        <View style={styles.shorts}>
          <Pressable
            onPress={() => setShorts('shorts')}
            style={[
              shorts === 'shorts' && { backgroundColor: Colors.active_bg },
              styles.shorts_child
            ]}
          >
            <Text style={styles.shorts_title}>0 shorts</Text>
          </Pressable>
          <Pressable
            onPress={() => setShorts('collections')}
            style={[
              shorts === 'collections' && { backgroundColor: Colors.active_bg },
              styles.shorts_child
            ]}
          >
            <Text style={styles.shorts_title}>10 Collections</Text>
          </Pressable>
        </View>

        {shorts === 'shorts' && (
          <ScrollView
            horizontal={true}
            style={styles.scroll_shorts}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
          >
            {shorts.length <= 0 && (
              <Image
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 100
                }}
                source={require('../../../assets/images/empty_shorts.png')}
              />
            )}
            <Pressable
              style={{
                width: 155,
                height: '100%',
                gap: 5
              }}
            >
              <Image
                source={require('../../../assets/images/shorts_img.png')}
                style={{ width: '100%', height: '90%', borderRadius: 10 }}
                resizeMode='stretch'
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Exo700',
                  color: Colors.gray
                }}
              >
                Lorem ipsum!
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 155,
                height: '100%',
                gap: 5
              }}
            >
              <Image
                source={require('../../../assets/images/shorts_img.png')}
                style={{ width: '100%', height: '90%', borderRadius: 10 }}
                resizeMode='stretch'
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Exo700',
                  color: Colors.gray
                }}
              >
                Lorem ipsum!
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 155,
                height: '100%',
                gap: 5
              }}
            >
              <Image
                source={require('../../../assets/images/shorts_img.png')}
                style={{ width: '100%', height: '90%', borderRadius: 10 }}
                resizeMode='stretch'
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Exo700',
                  color: Colors.gray
                }}
              >
                Lorem ipsum!
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 155,
                height: '100%',
                gap: 5
              }}
            >
              <Image
                source={require('../../../assets/images/shorts_img.png')}
                style={{ width: '100%', height: '90%', borderRadius: 10 }}
                resizeMode='stretch'
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Exo700',
                  color: Colors.gray
                }}
              >
                Lorem ipsum!
              </Text>
            </Pressable>
          </ScrollView>
        )}

        {shorts === 'collections' && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 15
            }}
          >
            <Pressable style={styles.colloection_card}>
              <Image
                style={{ width: '100%', height: 158 }}
                source={require('../../../assets/images/likes.png')}
                resizeMode='contain'
              />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.gray,
                  fontFamily: 'Exo500'
                }}
              >
                25 shots
              </Text>
            </Pressable>
            <Pressable style={styles.colloection_card}>
              <Image
                style={{ width: '100%', height: 158 }}
                source={require('../../../assets/images/likes.png')}
                resizeMode='contain'
              />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.gray,
                  fontFamily: 'Exo500'
                }}
              >
                25 shots
              </Text>
            </Pressable>
            <Pressable style={styles.colloection_card}>
              <Image
                style={{ width: '100%', height: 158 }}
                source={require('../../../assets/images/likes.png')}
                resizeMode='contain'
              />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.gray,
                  fontFamily: 'Exo500'
                }}
              >
                25 shots
              </Text>
            </Pressable>
            <Pressable style={styles.colloection_card}>
              <Image
                style={{ width: '100%', height: 158 }}
                source={require('../../../assets/images/likes.png')}
                resizeMode='contain'
              />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.gray,
                  fontFamily: 'Exo500'
                }}
              >
                25 shots
              </Text>
            </Pressable>
          </ScrollView>
        )}
      </View>

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
          onPress={choiceSearch}
          style={[
            styles.footer_content,
            activePage === 'Search' && { backgroundColor: Colors.likes }
          ]}
        >
          <Footer_search_icon colors={colors} activePage={activePage} />
        </Pressable>
        <Pressable
          onPress={() => setActivePage('Likes')}
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
      {showSidebar && (
        <Sideber
          insets={insets}
          closed={closedSidebar}
          slide={slideAnimation}
        />
      )}
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

  top_content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingVertical: 16,
    paddingLeft: '39%'
  },

  username: {
    fontFamily: 'Exo700',
    color: Colors.light,
    fontSize: 14
  },

  name: {
    color: Colors.header_title,
    fontSize: 20,
    fontFamily: 'Exo700'
  },

  countriy: {
    color: Colors.gray,
    fontSize: 16,
    fontFamily: 'Exo500'
  },

  follows: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.follows,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 6,
    marginTop: 14
  },

  followers: {
    flexDirection: 'row',
    gap: 5
  },

  follow_count: {
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Exo700',
    color: Colors.black
  },

  follow_title: {
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Exo500',
    color: Colors.personal
  },

  shorts: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 6,
    marginTop: 14,
    marginBottom: 16
  },

  shorts_child: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },

  shorts_title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Exo500',
    color: Colors.personal
  },

  scroll_shorts: {
    width: '100%',
    height: '100%'
  },

  colloection_card: {
    width: 158,
    height: 185,

    justifyContent: 'space-between'
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
