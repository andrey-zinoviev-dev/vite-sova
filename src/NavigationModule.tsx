import { useState } from "react"
import { ModuleExtInterface } from "./store/features/courseSlice";
import RowButton from "./RowButton";
import ModuleButton from "./ModuleButton";

interface NavigationModuleInterface {
  module: ModuleExtInterface
  children: React.ReactNode | React.ReactNode[],
}

export default function NavigationModule ({ module, children }: NavigationModuleInterface) {
  //state
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <RowButton handleClick={() => {
        setOpened(!opened);
      }}>
        <ModuleButton opened={opened} module={module}></ModuleButton>
      </RowButton>

      {opened && children}
    </>
    

  )
}