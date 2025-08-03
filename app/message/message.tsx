import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Colors, Gap } from '../../shared/tokkens'
import Back from '../../assets/icons/back'
import { useState } from 'react'
import Comment from '../../assets/icons/comment'
import { router } from 'expo-router'
import SearchIcon from '../../assets/icons/search-icon'

const FRIENDS = [
  {
    id: 1,
    name: 'Bruno Pham',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  },
  {
    id: 2,

    name: 'Bruno Pham',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  },
  {
    id: 3,

    name: 'Bruno Pham',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  },
  {
    id: 4,

    name: 'Bruno Pham',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  },
  {
    id: 5,

    name: 'Bruno Pham',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  },
  {
    id: 6,

    name: 'Bruno Pham',
    message: 'Hello, I really like your photo about...',
    date: '2 mins ago',
    comment: 20
  }
]

export default function Message () {
  const [active, setActive] = useState<string | boolean>('Personal')
  const [click, setClick] = useState<number | null>(null)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Back />
        </Pressable>
        <Text style={styles.header_title}>Message</Text>
        <Pressable onPress={() => router.push('/directSearch/directSearch')}>
          <SearchIcon />
        </Pressable>
      </View>

      <View style={styles.choice}>
        <Pressable
          onPress={() => setActive('Personal')}
          style={[styles.personal, active === 'Personal' && styles.actice_bg]}
        >
          <Text
            style={[
              styles.personal_text,
              active === 'Personal' && styles.active_text
            ]}
          >
            Personal
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActive('Characters')}
          style={[styles.personal, active === 'Characters' && styles.actice_bg]}
        >
          <Text
            style={[
              styles.personal_text,
              active === 'Characters' && styles.active_text
            ]}
          >
            Characters
          </Text>
        </Pressable>
      </View>
      {active === 'Personal' &&
        (FRIENDS.length === 0 ? (
          <View style={styles.empty}>
            <Image
              style={{ width: 131 }}
              source={require('../../assets/images/empty.png')}
            />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.friends}
            showsVerticalScrollIndicator={false}
          >
            {FRIENDS?.map(friends => (
              <Pressable
                key={friends.id}
                onPressIn={() => setClick(friends.id)}
                style={[
                  styles.friends__card,
                  click === friends.id && styles.click_bg
                ]}
              >
                <Image
                  style={styles.user_img}
                  source={require('../../assets/images/user_img.png')}
                  resizeMode='contain'
                />
                <View style={styles.cards_right}>
                  <Text style={styles.friends_name}>{friends.name}</Text>
                  <Text style={styles.friends_message}>{friends.message}</Text>
                  <View style={styles.friends_bottom_content}>
                    <Text style={styles.friends_date}>{friends.date}</Text>
                    <View style={styles.friends_comment_content}>
                      <Text style={styles.friends_comment}>
                        {friends.comment}
                      </Text>
                      <Comment />
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        ))}

      {active === 'Characters' && (
        <View style={styles.empty}>
          <Image
            style={{ width: 131 }}
            source={require('../../assets/images/empty.png')}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    flex: 1,
    padding: 16,
    alignItems: 'center',
    gap: 15
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

  choice: {
    width: '100%',
    flexDirection: 'row',
    padding: 6
  },

  personal: {
    width: '50%'
  },

  personal_text: {
    fontSize: 16,
    color: Colors.personal,
    fontFamily: 'Exo500',
    textAlign: 'center',
    paddingVertical: 10
  },

  actice_bg: {
    backgroundColor: Colors.active_bg,
    borderRadius: 6
  },

  active_text: {
    color: Colors.active_text,
    fontFamily: 'Exo700'
  },

  friends: {
    width: '95%',
    gap: Gap.gap12
  },

  friends__card: {
    width: '85%',
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
    width: '100%',
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
  },

  click_bg: {
    backgroundColor: Colors.active_bg
  },

  empty: {
    flex: 1,
    justifyContent: 'center'
  }
})
