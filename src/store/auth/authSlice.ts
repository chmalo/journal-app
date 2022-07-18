import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "../../auth/layout/initialState"

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"
      state.uid = payload.uid
      state.email = payload.email
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL
      state.errorMessage = null
    },
    logout: (state, { payload }) => {
      state.status = "no-authenticated"
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = payload.errorMessage
    },
    checkingCredentials: (state) => {
      state.status = "checking"
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
