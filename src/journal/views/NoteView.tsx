import { Button, Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components"
import { useAppSelector, useForm } from "../../hooks"
import { RootState } from "../../store"
import { useMemo } from "react"

export const NoteView = () => {
  const { active: note } = useAppSelector((state: RootState) => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo(() => {
    const newDate = new Date(date)

    return newDate.toUTCString()
  }, [date])

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
        <Button color="primary" sx={{ padding: 2 }}>
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

      <ImageGallery />
    </Grid>
  )
}
