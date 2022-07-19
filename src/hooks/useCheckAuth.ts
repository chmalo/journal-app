import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { RootState } from "../store"
import { useAppDispatch, useAppSelector } from "./hooks"
import { login, logout } from "../store/auth"

export const UseCheckAuth = () => {
  const { status } = useAppSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        return dispatch(logout({}))
      }

      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
    })
  }, [])

  return { status }
}
