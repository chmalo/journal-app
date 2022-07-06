import { ChangeEvent, useState } from "react"
import { formValues } from "../interfaces"

export const useForm = (initialForm: formValues = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
