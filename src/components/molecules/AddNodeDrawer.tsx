import { FC, ReactElement } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { DrawerProps } from "@/types"
import AddNodeForm from "./AddNodeFom"
const AddNodeDrawer: FC<DrawerProps> = ({
  open,
  setOpen,
  onSubmit
}): ReactElement => {
  return (
    <Drawer
      open={open}
      direction="right"
      shouldScaleBackground
      onClose={() => setOpen(false)}
    >
      <DrawerContent className=" left-auto right-4 top-2 bottom-2 fixed z-50  outline-none w-[310px] flex mt-0 ">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <AddNodeForm onSubmit={onSubmit} onClose={() => setOpen(false)} />
      </DrawerContent>
    </Drawer>
  )
}

export default AddNodeDrawer
