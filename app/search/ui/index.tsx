import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors, Gap } from '../../../shared/tokkens'
import SearchIcon from '../../../assets/icons/search-icon'
import { BlurView } from 'expo-blur'
import { useEffect, useState } from 'react'
import Closed from '../../../assets/icons/closed'
import axios from 'axios'

export default function Search () {
  const insets = useSafeAreaInsets()
  const [searchUser, setSearchUser] = useState<string>('')
  const [users, setUsers] = useState<any[]>([])

  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU1NjA5NjM3LCJpYXQiOjE3NTU2MDYwMzcsImp0aSI6IjYyNTZiZTY2MzJmOTRhOGJhNWNjZDg1YjViZWY5NjBjIiwidXNlcl9pZCI6IjE0In0.H7Qa1iaEeBlLzOxlS2RNK8dNvbv5CYu5yTyVUMh6mU4'

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchUser.length > 0) {
        try {
          const res = await axios.get(
            `http://interest.anvarshop.uz/search-user/`,
            {
              params: { q: searchUser },
              headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
              }
            }
          )
          setUsers(res.data)
          console.log(res.data)
        } catch (err) {
          console.error('API error:', err)
          setUsers([])
        }
      } else {
        setUsers([])
      }
    }

    fetchUsers()
  }, [searchUser])

  return (
    <SafeAreaView style={[styles.search_container, { paddingTop: insets.top }]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />

      <Pressable style={styles.search__content}>
        <SearchIcon />
        <TextInput
          style={styles.search_inp}
          placeholder='Search'
          placeholderTextColor={Colors.footer_title}
          value={searchUser}
          onChangeText={setSearchUser}
        />
      </Pressable>

      <View style={{ gap: Gap.gap16 }}>
        {users.length > 0 &&
          users.map(user => (
            <View style={styles.friends} key={user.id}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Gap.gap16
                }}
              >
                <Image
                  style={styles.user_img}
                  source={require('../../../assets/images/user_img.png')}
                  resizeMode='contain'
                />
                <View style={styles.cards_right}>
                  <Text style={styles.friends_name}>
                    {user.name} {user.last_name}
                  </Text>
                  <Text style={styles.friends_message}>
                    {user.email ?? 'No email'}
                  </Text>
                </View>
              </View>
              <View>
                <Closed />
              </View>
            </View>
          ))}
      </View>

      {searchUser.length <= 0 && (
        <View style={{ width: '100%', flex: 1, marginTop: 10, gap: 24 }}>
          <View style={{ gap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={styles.search__position}>Topic</Text>
              <Text style={styles.search__view}>View more</Text>
            </View>
            <ScrollView
              style={{ width: '100%' }}
              horizontal
              contentContainerStyle={{ gap: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              {[1, 2, 3].map(i => (
                <ImageBackground
                  key={i}
                  source={require('../../../assets/images/topik.png')}
                  style={styles.bg_search}
                  resizeMode='cover'
                >
                  <BlurView
                    intensity={70}
                    tint='dark'
                    style={StyleSheet.absoluteFill}
                  />
                  <Text style={styles.bg_text}>PHOTOGRAPHY</Text>
                </ImageBackground>
              ))}
            </ScrollView>
          </View>

          <View style={{ gap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={styles.search__position}>Collection</Text>
              <Text style={styles.search__view}>View more</Text>
            </View>
            <ScrollView
              style={{ width: '100%' }}
              horizontal
              contentContainerStyle={{ gap: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              {[1, 2, 3].map(i => (
                <View key={i} style={{ gap: 6 }}>
                  <ImageBackground
                    source={require('../../../assets/images/topik.png')}
                    style={styles.bg_photo}
                    resizeMode='cover'
                  >
                    <BlurView
                      intensity={70}
                      tint='dark'
                      style={StyleSheet.absoluteFill}
                    />
                    <Text style={styles.photo_text}>PORTRAIT PHOTOGRAPHY</Text>
                  </ImageBackground>
                  <Text
                    style={{
                      fontFamily: 'Exo500',
                      color: Colors.gray,
                      fontSize: 14
                    }}
                  >
                    70 photos
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{ gap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={styles.search__position}>Collection</Text>
              <Text style={styles.search__view}>View more</Text>
            </View>
            <ScrollView
              style={{ width: '100%' }}
              horizontal
              contentContainerStyle={{ gap: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              {[1, 2, 3].map(i => (
                <View key={i} style={{ gap: 6 }}>
                  <ImageBackground
                    source={require('../../../assets/images/topik.png')}
                    style={styles.bg_photo}
                    resizeMode='cover'
                  >
                    <BlurView
                      intensity={70}
                      tint='dark'
                      style={StyleSheet.absoluteFill}
                    />
                    <Text style={styles.photo_text}>PORTRAIT PHOTOGRAPHY</Text>
                  </ImageBackground>
                  <Text
                    style={{
                      fontFamily: 'Exo500',
                      color: Colors.gray,
                      fontSize: 14
                    }}
                  >
                    70 photos
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  search_container: {
    flex: 1,
    backgroundColor: Colors.light,
    padding: 20
  },

  search__content: {
    width: '100%',
    height: 35,
    backgroundColor: Colors.search_input_bg,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 30,
    paddingHorizontal: 15,
    gap: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },

  search_inp: {
    flex: 1,
    height: '100%',
    color: Colors.header_title,
    fontSize: 15,
    fontFamily: 'Exo500'
  },

  search__position: {
    fontFamily: 'Exo700',
    fontSize: 20,
    color: Colors.black
  },

  search__view: {
    fontFamily: 'Exo500',
    fontSize: 14,
    color: Colors.active_text
  },

  bg_search: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },

  bg_text: {
    fontFamily: 'Exo700',
    fontSize: 14,
    color: Colors.light
  },

  bg_photo: {
    width: 158,
    height: 158,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 28
  },

  photo_text: {
    fontFamily: 'Exo700',
    fontSize: 14,
    color: Colors.light,
    textAlign: 'center'
  },

  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 190
  },

  friends: {
    width: '100%',
    height: 68,
    backgroundColor: Colors.pass,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },

  user_img: {
    width: 40,
    height: 40,
    borderRadius: 50
  },

  cards_right: {
    gap: 4,
    alignItems: 'flex-start'
  },

  friends_name: {
    fontSize: 16,
    color: Colors.header_title,
    fontFamily: 'Exo700',
    textTransform: 'capitalize'
  },

  friends_message: {
    fontSize: 14,
    color: Colors.personal,
    fontFamily: 'Exo500'
  }
})
