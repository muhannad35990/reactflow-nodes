import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form"
export interface AddbtnProps {
  onClick: () => void
}

export interface DrawerProps {
  open: { show: boolean; data: any }
  setOpen: ({ show, data }: any) => void
  addNewNode: (data: FormData) => void
  updateNode: (data: FormData) => void
}
export enum nodeType {
  user = "user",
  habit = "habit"
}
export type habitsType = {
  label: string
  value: number
}
export type ValidFieldNames = "name" | "type" | "username" | "habit" | "id"

export type FormData = {
  id?: string
  name: string
  type?: nodeType
  username?: string
  habit?: string
}
export type FormFieldProps = {
  type: string
  placeholder?: string
  name: ValidFieldNames
  register: UseFormRegister<FormData>
  error: FieldError | undefined
  value?: string
  setValue?: UseFormSetValue<FormData>
  selectOptions?: habitsType[]
  disabled?: boolean
}

export interface AddNodeFormProps {
  onSubmit: (data: FormData) => void
  onClose: () => void
  data?: any
}
