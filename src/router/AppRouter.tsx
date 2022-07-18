import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import { CheckingAuth } from "../ui"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth"

export const AppRouter = () => {
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

  if (status === "checking") {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  )
}
