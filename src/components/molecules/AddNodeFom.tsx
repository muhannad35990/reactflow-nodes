import { useForm, useWatch } from "react-hook-form"
import { AddNodeFormProps, FormData, nodeType } from "@/types"
import FormField from "../atoms/FormField"
import { zodResolver } from "@hookform/resolvers/zod"
import { NodeSchema } from "./schema"
import { FC, ReactElement } from "react"
import { Button } from "../ui/button"

const AddNodeForm: FC<AddNodeFormProps> = ({
  onSubmit,
  onClose,
  data
}): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control
  } = useForm<FormData>({
    resolver: zodResolver(NodeSchema),
    defaultValues: {
      id: data?.id || "",
      name: data?.data?.label || "",
      username: data?.data?.username || "",
      type: data?.data?.type || "",
      habit: data?.data?.habit || ""
    }
  })
  const type = useWatch({ control, name: "type" })
  const habit = useWatch({ control, name: "habit" })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 w-full">
        <h1 className="text-3xl font-bold mb-4">
          {data ? "Update Node" : "Create New Node"}
        </h1>
        {data && (
          <FormField
            type="text"
            name="id"
            register={register}
            error={errors.id}
            disabled={true}
          />
        )}
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
                { label: "Reading", value: 0 },
                { label: "Exercise", value: 1 }
              ]}
              setValue={setValue}
              value={habit}
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
