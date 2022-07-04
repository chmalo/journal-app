import { createSlice } from "@reduxjs/toolkit"
import { authState } from "../interfaces"

const initialState: authState = {
  status: "checking", // 'no-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {},
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
