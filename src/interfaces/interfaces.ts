export interface authState {
  status: string
  uid: number | null
  email: string | null
  displayName: string | null
  photoURL: string | null
  errorMessage: string | null
}

export interface formValues {
  displayName?: string
  email?: string
  password?: string
  confirmPassword?: string
}
