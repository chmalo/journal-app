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

export interface Notes {
  id?: string | number
  body: string
  title: string
  date: number
  imageUrls?: string
}

export interface JournalState {
  isSaving: boolean
  messageSaved: string
  notes: Notes[]
  active: null
}
