import { checkingCredentials } from "./authSlice"
import { AppDispatch } from "../store"
import { formValues } from "../../interfaces"

export const checkingAuthentication = ({ email, password }: formValues) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSingnIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())
  }
}
