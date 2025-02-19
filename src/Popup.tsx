import { createPortal } from "react-dom";
import "./Popup.css"

type PopupType = React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode | React.ReactNode[],

}


export default function Popup({ children, ...props}: PopupType) {

  const { className, ...rest } = props;

  const classStr = "popup " + (className || "");

  return createPortal(<section className={classStr} {...rest}>
    <div className="popup__container">
      {/* <h3>Попап окно</h3> */}
      {children}
    </div>
  </section>, document.body);
}