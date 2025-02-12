import { useState } from "react"
import { ModuleExtInterface } from "./store/features/courseSlice";
import ModuleButton from "./ModuleButton";
import { useParams } from "react-router";

interface NavigationModuleInterface {
  module: ModuleExtInterface
  children: React.ReactNode | React.ReactNode[],
}

export default function NavigationModule ({ module, children }: NavigationModuleInterface) {
  const { moduleId } = useParams();

  //state
  const [opened, setOpened] = useState<boolean>(moduleId === module._id ? true : false);

  return (
    <>
      <ModuleButton handleClick={() => {
        setOpened(!opened);
      }} module={module} opened={opened}></ModuleButton>

      {opened && children}
    </>
    

  )
}