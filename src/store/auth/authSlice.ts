import { createSlice } from "@reduxjs/toolkit"
import { authState } from "../../interfaces"

const initialState: authState = {
  status: "no-authenticated", // 'checking', 'authenticated'
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
    checkingCredentials: (state) => {
      state.status = "checking"
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
