import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { Colors, Padding } from '../shared/tokkens'
import Direct from '../assets/icons/direct'
import Search from '../assets/icons/search'
import Footer_home_icon from '../assets/icons/footer_home_icon'
import Footer_search_icon from '../assets/icons/footer_search_icons'
import Footer_friends_icon from '../assets/icons/footer_friends_icon'
import Footer_profile_icon from '../assets/icons/footer-profile_icons'
import Footer_like_icon from '../assets/icons/footer_like'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Add from '../assets/icons/add'
import Comment from '../assets/icons/comment'
import Like from '../assets/icons/like'
import PostEye from '../assets/icons/post_eye'
import { useState } from 'react'

const POSTS = [
  {
    id: 1,
    full_name: 'Thanh Pham',
    date: '1 hour ago'
  },
  {
    id: 2,
    full_name: 'Bruno',
    date: '1 hour ago'
  },
  {
    id: 3,
    full_name: 'Thanh Pham',
    date: '1 hour ago'
  },
  {
    id: 4,
    full_name: 'Bruno',
    date: '1 hour ago'
  }
]

export default function App () {
  const [categories, setCategories] = useState<string>('Popular')
  const [activePage, setActivePage] = useState<string>('Home')
  const colors = Colors.light

  const choiceProfile = () => {
    setActivePage('Profile')
    router.push('/profile/ui')
  }

  const choiceSearch = () => {
    setActivePage('Search')
    router.push('/search/ui')
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.light}
        barStyle={'dark-content'}
      />

      <View style={styles.header}>
        <Pressable style={styles.search_bg}>
          <Search />
          <TextInput
            style={styles.search}
            placeholder='Search'
            placeholderTextColor={'#BDBDBD'}
          />
        </Pressable>
        <Pressable
          style={styles.direct}
          onPress={() => router.push('/message/message')}
        >
          <Direct />
        </Pressable>
      </View>

      <View
        style={{
          width: '100%',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Pressable
          onPress={() => setCategories('Popular')}
          style={[
            {
              backgroundColor:
                categories === 'Popular' ? Colors.active_bg : 'transparent'
            },
            { paddingVertical: 10, width: '33%', borderRadius: 6 }
          ]}
        >
          <Text
            style={[
              {
                color: categories === 'Popular' ? '#5151C6' : Colors.personal
              },
              {
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Exo500'
              }
            ]}
          >
            Popular
          </Text>
        </Pressable>
        <Pressable
          style={[
            {
              backgroundColor:
                categories === 'Trending' ? Colors.active_bg : 'transparent'
            },
            {
              paddingVertical: 10,
              width: '33%',
              borderRadius: 6
            }
          ]}
          onPress={() => setCategories('Trending')}
        >
          <Text
            style={[
              {
                color: categories === 'Trending' ? '#5151C6' : Colors.personal
              },
              {
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Exo500'
              }
            ]}
          >
            Trending
          </Text>
        </Pressable>
        <Pressable
          style={[
            {
              backgroundColor:
                categories === 'Following' ? Colors.active_bg : 'transparent'
            },
            {
              paddingVertical: 10,
              width: '33%',
              borderRadius: 6
            }
          ]}
          onPress={() => setCategories('Following')}
        >
          <Text
            style={[
              {
                color: categories === 'Following' ? '#5151C6' : Colors.personal
              },
              {
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Exo500'
              }
            ]}
          >
            Following
          </Text>
        </Pressable>
      </View>

      {categories === 'Popular' && (
        <ScrollView
          contentContainerStyle={styles.post_collection}
          showsVerticalScrollIndicator={false}
        >
          {POSTS?.map(post => (
            <View key={post.id} style={styles.post_content}>
              <View style={styles.post_header}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                  }}
                >
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../assets/images/userprofile.png')}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.header_title,
                      fontFamily: 'Exo500'
                    }}
                  >
                    {post.full_name}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Exo500',
                    fontSize: 14,
                    color: '#BDBDBD'
                  }}
                >
                  {post.date}
                </Text>
              </View>

              <Image
                style={{ width: '100%', height: 224 }}
                source={require('../assets/images/large_img.png')}
                resizeMode='contain'
              />

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 14,
                    alignItems: 'center'
                  }}
                >
                  <Pressable>
                    <Add />
                  </Pressable>
                  <View style={{ flexDirection: 'row', gap: 16 }}>
                    <Pressable
                      style={{
                        flexDirection: 'row',
                        gap: 6,
                        alignItems: 'center'
                      }}
                    >
                      <Text
                        style={{ color: Colors.gray, fontFamily: 'Exo500' }}
                      >
                        20
                      </Text>
                      <Comment />
                    </Pressable>
                    <Pressable
                      style={{
                        flexDirection: 'row',
                        gap: 6,
                        alignItems: 'center'
                      }}
                    >
                      <Text
                        style={{ color: Colors.gray, fontFamily: 'Exo500' }}
                      >
                        125
                      </Text>
                      <Like />
                    </Pressable>
                  </View>
                </View>
                <View></View>
              </View>

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  paddingVertical: 14
                }}
              >
                <Pressable
                  style={{
                    flexDirection: 'row',
                    gap: 6,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: Colors.gray, fontFamily: 'Exo500' }}>
                    125
                  </Text>
                  <PostEye />
                </Pressable>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    gap: 6,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: Colors.gray, fontFamily: 'Exo500' }}>
                    20
                  </Text>
                  <Comment />
                </Pressable>

                <Pressable
                  style={{
                    flexDirection: 'row',
                    gap: 6,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: Colors.gray, fontFamily: 'Exo500' }}>
                    125
                  </Text>
                  <Like />
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      {categories === 'Trending' && (
        <ScrollView
          contentContainerStyle={styles.post_collection}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ textAlign: 'center', marginTop: 50 }}>
            Hozircha malumot yuq !!!
          </Text>
        </ScrollView>
      )}

      {categories === 'Following' && (
        <ScrollView
          contentContainerStyle={styles.post_collection}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ textAlign: 'center', marginTop: 50 }}>
            Hozircha malumot yuq !!!
          </Text>
        </ScrollView>
      )}

      <View style={styles.footer}>
        <Pressable
          onPress={() => setActivePage('Home')}
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
          onPress={choiceProfile}
          style={[
            styles.footer_content,
            activePage === 'Profile' && { backgroundColor: Colors.likes }
          ]}
        >
          <Footer_profile_icon colors={colors} activePage={activePage} />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    justifyContent: 'space-between'
  },

  header: {
    width: '100%',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 24,
    marginTop: 24
  },

  search_bg: {
    width: '85%',
    height: 37,
    borderRadius: 30,
    backgroundColor: Colors.search,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingLeft: 16,
    paddingRight: 35
  },

  search: {
    width: '100%',
    fontFamily: 'Exo500',
    color: Colors.searchText,
    paddingRight: 10
  },

  direct: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: Colors.search,
    alignItems: 'center',
    justifyContent: 'center'
  },

  post_collection: {
    width: '100%',
    gap: 16,
    marginVertical: 10
  },

  post_content: {
    width: '100%',
    height: 376,
    backgroundColor: Colors.light,
    boxShadow:
      'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    borderRadius: 10
  },

  post_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10
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
