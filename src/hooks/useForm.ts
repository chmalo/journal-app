import { ChangeEvent, useEffect, useMemo, useState } from "react"

export const useForm = (initialForm: any = {}, formValidations: any = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormvalidation] = useState<
    Record<string, string | null>
  >({})

  useEffect(() => {
    createValidator()
  }, [formState])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const isFormValid = useMemo(() => {
    for (const formValues of Object.keys(formValidation)) {
      if (formValidation[formValues] !== null) return false
    }

    return true
  }, [formValidation])

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

  const createValidator = () => {
    const formCheckedValues: Record<string, string | null> = {}

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField]

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage
    }
    setFormvalidation(formCheckedValues)
  }

  return {
    ...formState,
    formState,
    isFormValid,
    ...formValidation,
    onInputChange,
    onResetForm,
  }
}
