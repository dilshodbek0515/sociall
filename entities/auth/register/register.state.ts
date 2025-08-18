import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { RegisterType, ResponseData } from './register.interface'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { atom } from 'jotai'
import axios from 'axios'
import { Register_Api } from '../api/api'
import { router } from 'expo-router'

const storage = createJSONStorage<ResponseData>(() => AsyncStorage)
const registerState = atomWithStorage<ResponseData>(
  'register',
  { isLoading: false, error: null },
  storage
)

export const registerAtom = atom(
  get => get(registerState),
  async (
    _get,
    set,
    { name, last_name, email, phone, password }: RegisterType
  ) => {
    set(registerState, {
      isLoading: true,
      error: null
    })

    try {
      const { data } = await axios.post(Register_Api.api, {
        name,
        last_name,
        email,
        phone,
        password
      })

      router.replace('/')
      set(registerState, {
        isLoading: false,
        error: null
      })
    } catch (error) {
      set(registerState, {
        isLoading: false,
        error: error
      })
    }
  }
)
