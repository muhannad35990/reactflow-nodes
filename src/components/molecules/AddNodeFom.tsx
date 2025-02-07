import { useForm, useWatch } from "react-hook-form"
import { AddNodeFormProps, FormData, nodeType } from "@/types"
import FormField from "../atoms/FormField"
import { zodResolver } from "@hookform/resolvers/zod"
import { NodeSchema } from "./schema"
import { FC, ReactElement } from "react"
import { Button } from "../ui/button"

const AddNodeForm: FC<AddNodeFormProps> = ({
  onSubmit,
  onClose
}): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
    setValue,
    control,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(NodeSchema)
  })
  const type = useWatch({ control, name: "type" })
  console.log("errors", errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 w-full">
        <h1 className="text-3xl font-bold mb-4">Create New Node</h1>
        <FormField
          type="text"
          placeholder="Node name"
          name="name"
          register={register}
          error={errors.name}
        />
        <div className="flex items-center gap-3">
          <FormField
            type="radio"
            placeholder="Type"
            name="type"
            register={register}
            error={errors.type}
            value="user"
            setValue={setValue}
          />
          <FormField
            type="radio"
            placeholder="Type"
            name="type"
            register={register}
            error={errors.type}
            value="habit"
            setValue={setValue}
          />
        </div>
        <div className="">
          {type == nodeType.habit && (
            <FormField
              type="select"
              placeholder="Select Habit"
              name="habit"
              register={register}
              error={errors.habit}
              selectOptions={[
                { label: "Habit1", value: 0 },
                { label: "Habit2", value: 1 }
              ]}
              setValue={setValue}
            />
          )}
          {type == nodeType.user && (
            <FormField
              type="text"
              placeholder="User name"
              name="username"
              register={register}
              error={errors.username}
              setValue={setValue}
            />
          )}
        </div>
        <div className="flex items-center gap-3 mt-4">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline" onClick={() => onClose()}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  )
}

export default AddNodeForm
