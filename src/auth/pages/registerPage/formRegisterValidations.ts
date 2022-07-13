export const formRegisterValidations = {
  displayName: [(value: string) => value.length >= 1, "El nombre es requerido"],
  email: [(value: string) => value.includes("@"), "El correo debe tener una @"],
  password: [
    (value: string) => value.length >= 6,
    "La contraseña debe tener mas de 6 caracteres",
  ],
  confirmPassword: [
    (value: string, password: string) => value.length >= 6,
    "La contraseña debe tener mas de 6 caracteres",
  ],
}
