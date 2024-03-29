import { checkingCredentials, login, logout } from "./authSlice"
import { AppDispatch } from "../store"
import { FormValues } from "../../interfaces"
import {
  loginWithEmailPassword,
  logoutFireBase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers"
import { clearNotesLogout } from "../journal"

export const checkingAuthentication = ({ email, password }: FormValues) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSingnIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())

    const result = await singInWithGoogle()

    if (!result.ok) {
      return dispatch(logout(result))
    }

    dispatch(login(result))
  }
}

export const starCreatingUserWithEmailPassword = ({
  displayName,
  email,
  password,
}: {
  displayName: string
  email: string
  password: string
}) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())

    const resp = await registerUserWithEmailPassword({
      displayName,
      email,
      password,
    })

    if (!resp.ok) {
      return dispatch(logout(resp))
    }

    dispatch(login(resp))
  }
}

export const startLoginWithEmailPassword = ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())

    const result = await loginWithEmailPassword({ email, password })

    if (!result.ok) {
      return dispatch(logout(result))
    }

    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    await logoutFireBase()

    dispatch(clearNotesLogout())
    dispatch(logout({}))
  }
}
