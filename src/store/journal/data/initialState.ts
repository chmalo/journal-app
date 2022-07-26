import { JournalState } from "../../../interfaces"

export const initialState: JournalState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
}
