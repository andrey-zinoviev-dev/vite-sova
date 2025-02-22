import { createPortal } from "react-dom";
import "./Popup.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type PopupType = React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode | React.ReactNode[],
  closePoup: () => void
}


export default function Popup({ children, closePoup, ...props}: PopupType) {

  const { className, ...rest } = props;

  const classStr = "popup " + (className || "");

  return createPortal(<section className={classStr} {...rest}>
    <div className="popup__container">
      <button className="popup__close" onClick={closePoup}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {/* <h3>Попап окно</h3> */}
      {children}
    </div>
  </section>, document.body);
}