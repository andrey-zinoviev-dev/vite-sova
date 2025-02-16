import { createPortal } from "react-dom";

export default function Popup() {
  // const rootEl = document.getElementById("#root");

  return createPortal(<h3>Попап окно</h3>, document.body);
}