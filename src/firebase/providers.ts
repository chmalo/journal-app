import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { FirebaseAuth } from "./config"

const GoogleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, GoogleProvider)
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error: any) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorMessage,
      errorCode,
    }
  }
}

export const registerUserWithEmailPassword = async ({
  displayName,
  email,
  password,
}: {
  displayName: string
  email: string
  password: string
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const { uid, photoURL } = resp.user
    if (FirebaseAuth.currentUser) {
      await updateProfile(FirebaseAuth.currentUser, { displayName })
    }

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error: any) {
    const errorMessage = error.message

    return {
      ok: false,
      errorMessage,
    }
  }
}

export const loginWithEmailPassword = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL, displayName } = resp.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error: any) {
    const errorMessage = error.message

    return {
      ok: false,
      errorMessage,
    }
  }
}
