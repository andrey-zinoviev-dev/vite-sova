import { useState } from "react"
import { ModuleExtInterface } from "./intefaces/intefaces";
import ModuleButton from "./ModuleButton";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faChevronUp, faLock } from "@fortawesome/free-solid-svg-icons";
import RowButton from "./RowButton";
import "./NavigationModule.css";
interface NavigationModuleInterface {
  module: ModuleExtInterface
  children: React.ReactNode | React.ReactNode[],
}

export default function NavigationModule ({ module, children }: NavigationModuleInterface) {
  const { moduleId } = useParams();

  //state
  const [opened, setOpened] = useState<boolean>(moduleId === module._id ? true : false);

  return (
    <div className="navigation-module-container">
      <RowButton className={`navigation-module-button ${moduleId === module._id ? 'navigation-module-button_active' : ''}`} disabled={!module.available} onClick={() => {
        setOpened(!opened);
      }}>
        <span className="navigation-module-container__title">{module.title}</span>
        {module.available ? <FontAwesomeIcon icon={!opened ? faChevronRight : faChevronDown}></FontAwesomeIcon> : <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>}
      </RowButton>
      {opened && <div className="navigation-module-content">{children}</div>}
    </div>
  );
}