import { FormEvent, useMemo, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useAppDispatch, useAppSelector, useForm } from "../../hooks"
import { formData, formRegisterValidations } from "./registerPage"
import { starCreatingUserWithEmailPassword } from "../../store/auth"
import { RootState } from "../../store"

export const RegisterPage = () => {
  const dispatch = useAppDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { status, errorMessage } = useAppSelector(
    (state: RootState) => state.auth
  )
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  )

  const {
    formState,
    displayName,
    email,
    password,
    confirmPassword,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    confirmPasswordValid,
  } = useForm(formData, formRegisterValidations)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return

    dispatch(
      starCreatingUserWithEmailPassword({
        displayName,
        email,
        password,
      })
    )
    console.log("onSubmit", formState)
  }

  return (
    <AuthLayout title="Crear cuenta">
      <h2>FormValid: {isFormValid ? "Valido" : "Incorrecto"}</h2>

      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={formSubmitted && displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted && emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted && passwordValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Confirmar contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="confirmPassword"
              value={confirmPassword}
              onChange={onInputChange}
              error={!!confirmPasswordValid && formSubmitted}
              helperText={formSubmitted && confirmPasswordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
