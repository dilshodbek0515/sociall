import {
  Animated,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import Back from '../../assets/icons/back-icon'
import SearchIcon from '../../assets/icons/search-icon'
import { Colors } from '../../shared/tokkens'
import Check from './icons/check'
import User from './icons/user'
import Pennings from './icons/pennings'
import Saved from './icons/saved'
import Glowly from './icons/glowly'
import Chip from './icons/chip'
import Gpt from './icons/gpt'
import Leave from './icons/leave'
import { router } from 'expo-router'

export default function Sideber ({ closed, slide, insets }: any) {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.light,
        zIndex: 999,
        transform: [{ translateX: slide }],
        paddingTop: insets.top + 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        gap: 10
      }}
    >
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Pressable onPress={closed}>
          <Back />
        </Pressable>

        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Exo500',
            fontSize: 16,
            color: Colors.header_title
          }}
        >
          Settings
        </Text>
        <Text style={{ opacity: 0 }}>Settings</Text>
      </View>

      <Pressable style={styles.search__content}>
        <SearchIcon />
        <TextInput
          style={styles.search_inp}
          placeholder='Search'
          placeholderTextColor={Colors.footer_title}
        />
      </Pressable>

      <View style={{ width: '100%', height: '100%', gap: 10, marginTop: 15 }}>
        <Pressable style={styles.sidebar_content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={styles.sidebar_child}>
              <User />
            </View>
            <Text style={styles.sidebar_title}>Cheap change</Text>
          </View>
          <Check />
        </Pressable>

        <Pressable style={styles.sidebar_content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={styles.sidebar_child}>
              <Pennings />
            </View>
            <Text style={styles.sidebar_title}>Pennings</Text>
          </View>
          <Check />
        </Pressable>

        <Pressable style={styles.sidebar_content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={styles.sidebar_child}>
              <Saved />
            </View>
            <Text style={styles.sidebar_title}>Saved</Text>
          </View>
          <Check />
        </Pressable>

        <Pressable style={styles.sidebar_content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={styles.sidebar_child}>
              <Glowly />
            </View>
            <Text style={styles.sidebar_title}>Glowly</Text>
          </View>
          <Check />
        </Pressable>

        <Pressable style={styles.sidebar_content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={styles.sidebar_child}>
              <Chip />
            </View>
            <Text style={styles.sidebar_title}>Chip money</Text>
          </View>
          <Check />
        </Pressable>

        <Pressable style={styles.sidebar_content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={styles.sidebar_child}>
              <Gpt />
            </View>
            <Text style={styles.sidebar_title}>ChatGPT</Text>
          </View>
          <Check />
        </Pressable>

        <Pressable
          onPress={() => router.push('/logout/ui')}
          style={styles.sidebar_content}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={styles.sidebar_child}>
              <Leave />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: Colors.info__bg,
                fontFamily: 'Exo500'
              }}
            >
              Leave Account
            </Text>
          </View>
        </Pressable>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  search__content: {
    width: '100%',
    height: 35,
    backgroundColor: Colors.search_input_bg,
    marginTop: 10,
    borderRadius: 5,
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

  sidebar_content: {
    backgroundColor: Colors.search_input_bg,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  sidebar_child: {
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF'
  },

  sidebar_title: {
    fontSize: 14,
    color: Colors.header_title,
    fontFamily: 'Exo500'
  }
})
