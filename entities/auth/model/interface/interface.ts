export interface BtnType {
  text: string
  isActive?: boolean
  onPress?: () => void
  isLoading?: boolean
}

export interface ResponseData {
  isLoading: boolean
  token: string | null
  error: any
}

export interface LoginType {
  email: string
  password: string
}
