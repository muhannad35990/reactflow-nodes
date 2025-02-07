import { AddbtnProps } from "@/types"
import { FC, ReactElement } from "react"

const AddBtn: FC<AddbtnProps> = ({ onClick }): ReactElement => {
  return (
    <button
      type="button"
      className="absolute w-12 h-12 rounded-full bottom-8 right-8 bg-blue-600 text-white shadow border border-blue-600 text-3xl hover:bg-white hover:text-blue-600 ease-in-out"
      onClick={onClick}
    >
      +
    </button>
  )
}

export default AddBtn
