import AsyncStorage from '@react-native-async-storage/async-storage'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { LoginType, ResponseData } from './interface/interface'
import { atom } from 'jotai'
import axios, { AxiosError } from 'axios'
import { Login_Api } from '../api/api'
import { router } from 'expo-router'

const storage = createJSONStorage<ResponseData>(() => AsyncStorage)
const loginState = atomWithStorage<ResponseData>(
  'token',
  {
    token: null,
    isLoading: false,
    error: null
  },
  storage
)

export const loginAtom = atom(
  get => get(loginState),
  async (_get, set, { email, password }: LoginType) => {
    set(loginState, {
      token: null,
      isLoading: true,
      error: null
    })

    try {
      const { data } = await axios.post(Login_Api.api, {
        email,
        password
      })

      router.replace('/')
      set(loginState, {
        token: data.accessToken,
        isLoading: false,
        error: null
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        set(loginState, {
          token: null,
          isLoading: false,
          error: error
        })
      }
    }
  }
)

export const logoutAtom = atom(null, async (_get, set) => {
  await AsyncStorage.removeItem('visited')
  router.replace('/welcome')
  set(loginState, {
    token: null,
    isLoading: false,
    error: null
  })
})
