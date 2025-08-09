import {
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
export default function Search () {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.search_container, { paddingTop: insets.top }]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />
      <Pressable style={styles.search__content}>
        <SearchIcon />
        <TextInput
          style={styles.search_inp}
          placeholder='Search'
          placeholderTextColor={Colors.footer_title}
        />
      </Pressable>

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
            horizontal={true}
            contentContainerStyle={{ gap: 16 }}
            showsHorizontalScrollIndicator={false}
          >
            <ImageBackground
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
            <ImageBackground
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
            <ImageBackground
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
            horizontal={true}
            contentContainerStyle={{ gap: 16 }}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ gap: 6 }}>
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
            <View style={{ gap: 6 }}>
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
            <View style={{ gap: 6 }}>
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
            horizontal={true}
            contentContainerStyle={{ gap: 16 }}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ gap: 6 }}>
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
            <View style={{ gap: 6 }}>
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
            <View style={{ gap: 6 }}>
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
          </ScrollView>
        </View>
      </View>
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
  }
})
