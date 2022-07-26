import { collection, doc, setDoc } from "firebase/firestore/lite"
import { AppDispatch } from "../store"
import { FirebaseDB } from "../../firebase/config"
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
} from "./journalSlice"
import { loadNotes } from "../../journal/helpers"

export const startNewNote = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      id: "",
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNote = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { uid } = getState().auth
    if (!uid) throw new Error("El UID del usuario no existe")

    const notes = await loadNotes(uid)

    dispatch(setNotes(notes))
  }
}
