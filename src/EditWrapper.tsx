// import { faGear } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ActionButton from "./ActionButton";
import "./EditWrapper.css"
interface ElementEditWrapperInterface {
    children: React.ReactNode[]
}

export default function EditWrapper({ children }: ElementEditWrapperInterface) {
    return (
        <div className="edit-wrapper">
            {children}
        </div>
    )
}