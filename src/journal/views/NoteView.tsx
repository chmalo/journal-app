import { ChangeEvent, useEffect, useMemo, useRef } from "react"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"
import { RootState } from "../../store"

import { useAppDispatch, useAppSelector, useForm } from "../../hooks"
import { ImageGallery } from "../components"
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadFiles,
} from "../../store/journal"

export const NoteView = () => {
  const dispatch = useAppDispatch()
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useAppSelector((state: RootState) => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo(() => {
    const newDate = new Date(date)

    return newDate.toUTCString()
  }, [date])

  const fileInputRef = useRef<any>()

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success")
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  const onFileInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    if (target.files === 0) {
      return
    }

    dispatch(startUploadFiles(target.files))
  }

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      alignItems="center"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="ingrese un titulo"
          label="Titulo"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        ></TextField>

        <TextField
          type="text"
          variant="filled"
          name="body"
          value={body}
          onChange={onInputChange}
          fullWidth
          multiline
          placeholder="¿Que sucedio hoy?"
          minRows={5}
        ></TextField>
      </Grid>

      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Borrar Nota
        </Button>
      </Grid>

      <ImageGallery images={note.imageUrls} />
    </Grid>
  )
}
