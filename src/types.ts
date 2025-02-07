import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form"
export interface AddbtnProps {
  onClick: () => void
}

export interface DrawerProps {
  open: boolean
  setOpen: (v: boolean) => void
  onSubmit: (data: FormData) => void
}
export enum nodeType {
  user = "user",
  habit = "habit"
}
export type habitsType = {
  label: string
  value: number
}
export type ValidFieldNames = "name" | "type" | "username" | "habit"

export type FormData = {
  name: string
  type?: nodeType
  username?: string
  habit?: string
}
export type FormFieldProps = {
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<FormData>
  error: FieldError | undefined
  value?: string
  setValue?: UseFormSetValue<FormData>
  selectOptions?: habitsType[]
}

export interface AddNodeFormProps {
  onSubmit: (data: FormData) => void
  onClose: () => void
}
