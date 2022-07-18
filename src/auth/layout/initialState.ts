import { authState } from "../../interfaces"

export const initialState: authState = {
  status: "checking", // 'checking', "no-authenticated", 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}
