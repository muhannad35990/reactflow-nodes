import { FC, ReactElement } from "react"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { DrawerProps } from "@/types"
import AddNodeForm from "./AddNodeFom"
const AddNodeDrawer: FC<DrawerProps> = ({
  open,
  setOpen,
  addNewNode,
  updateNode
}): ReactElement => {
  return (
    <Drawer
      open={open?.show}
      direction="right"
      shouldScaleBackground
      onClose={() => setOpen({ show: false, data: null })}
    >
      <DrawerContent className=" left-auto right-4 top-2 bottom-2 fixed z-50  outline-none w-[310px] flex mt-0 ">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <AddNodeForm
          onSubmit={open.data ? updateNode : addNewNode}
          onClose={() => setOpen({ show: false, data: null })}
          data={open.data}
        />
      </DrawerContent>
    </Drawer>
  )
}

export default AddNodeDrawer
