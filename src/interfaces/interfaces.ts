export interface authState {
  status: string
  uid: number | null
  email: string | null
  displayName: string | null
  photoURL: string | null
  errorMessage: string | null
}

export interface FormValues {
  displayName?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export interface FormValidations {
  displayName?: (string | ((value: string) => boolean))[]
  email?: (string | ((value: string) => boolean))[]
  password?: (string | ((value: string) => boolean))[]
  confirmPassword?: (string | ((value: string, password: string) => boolean))[]
}
