import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { Colors, Gap } from '../../shared/tokkens'
import Back from '../../assets/icons/back'
import SearchIcon from '../../assets/icons/search-icon'
import { router } from 'expo-router'
import { useState } from 'react'
import Comment from '../../assets/icons/comment'

const FRIENDS__SEARCH = [
  {
    id: 1,
    name: 'Bruno Pham',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  },
  {
    id: 2,
    name: 'John Doe',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  },
  {
    id: 3,
    name: 'Hello World',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  }
]

export default function DirectSearch () {
  const [search, setSearch] = useState<string>('')

  const peoples = search
    ? FRIENDS__SEARCH.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase())
      })
    : []

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Back />
        </Pressable>
        <Text style={styles.header_title}>Message</Text>
        <Pressable>
          <SearchIcon />
        </Pressable>
      </View>

      <Pressable style={styles.search__content}>
        <SearchIcon />
        <TextInput
          style={styles.search_inp}
          placeholder='Search'
          placeholderTextColor={Colors.footer_title}
          value={search}
          onChangeText={setSearch}
        />
      </Pressable>

      <View style={{ gap: Gap.gap16 }}>
        {peoples.length > 0 ? (
          peoples?.map(users => (
            <ScrollView
              contentContainerStyle={styles.friends}
              showsVerticalScrollIndicator={false}
              key={users.id}
            >
              <Image
                style={styles.user_img}
                source={require('../../assets/images/user_img.png')}
                resizeMode='contain'
              />
              <View style={styles.cards_right}>
                <Text style={styles.friends_name}>{users.name}</Text>
                <Text style={styles.friends_message}>{users.message}</Text>
                <View style={styles.friends_bottom_content}>
                  <Text style={styles.friends_date}>{users.date}</Text>
                  <View style={styles.friends_comment_content}>
                    <Text style={styles.friends_comment}>{users.comment}</Text>
                    <Comment />
                  </View>
                </View>
              </View>
            </ScrollView>
          ))
        ) : (
          <View style={styles.empty}>
            <Image
              style={{ width: 131 }}
              source={require('../../assets/images/empty.png')}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    padding: 16,
    gap: Gap.gap16
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  header_title: {
    fontSize: 20,
    color: Colors.header_title,
    fontFamily: 'Exo700'
  },

  search__content: {
    width: '100%',
    height: 35,
    backgroundColor: Colors.search_input_bg,
    marginTop: 10,
    borderRadius: 3,
    paddingHorizontal: 15,
    gap: 10,
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

  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 190
  },

  friends: {
    width: '100%',
    height: 103,
    backgroundColor: Colors.pass,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'flex-start',
    padding: 15
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
    fontFamily: 'Exo700'
  },

  friends_message: {
    fontSize: 14,
    color: Colors.personal,
    fontFamily: 'Exo500'
  },

  friends_bottom_content: {
    width: '90%',
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  friends_date: {
    fontSize: 12,
    fontFamily: 'Exo500',
    color: Colors.footer_title
  },

  friends_comment_content: {
    flexDirection: 'row',
    gap: 6
  },

  friends_comment: {
    fontSize: 14,
    color: Colors.header_title,
    fontFamily: 'Exo500'
  }
})
