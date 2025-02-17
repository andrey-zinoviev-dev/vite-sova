import { createPortal } from "react-dom";
import "./Popup.css"

interface PopupInterface {
  children: React.ReactNode | React.ReactNode[],
}

export default function Popup({ children }: PopupInterface) {
  // const rootEl = document.getElementById("#root");

  return createPortal(<section className="popup">
    <div className="popup__container">
      {/* <h3>Попап окно</h3> */}
      {children}
    </div>
  </section>, document.body);
}