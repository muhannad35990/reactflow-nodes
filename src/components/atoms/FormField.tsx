import { FormFieldProps, habitsType } from "@/types"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  value,
  setValue,
  selectOptions
}) => (
  <div className="my-1">
    {type === "radio" && (
      <label htmlFor={name} className="flex items-center gap-2">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          onChange={() => {
            setValue && setValue(name, value)
          }}
          className="border rounded w-full p-1"
          value={value}
        />
        {value}
      </label>
    )}
    {type === "select" && (
      <Select
        {...register(name)}
        onValueChange={(v) => setValue && setValue(name, v)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectOptions?.map((opt: habitsType, index: number) => (
            <SelectItem value={opt.label} key={opt?.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )}
    {type === "text" && (
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="border rounded w-full p-1"
      />
    )}

    {error && <span className="text-red-500">{error.message}</span>}
  </div>
)
export default FormField
