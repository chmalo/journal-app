import { checkingCredentials, login, logout } from "./authSlice"
import { AppDispatch } from "../store"
import { formValues } from "../../interfaces"
import { singInWithGoogle } from "../../firebase/providers"

export const checkingAuthentication = ({ email, password }: formValues) => {
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
