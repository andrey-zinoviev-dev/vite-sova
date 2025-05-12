import { ComponentPropsWithoutRef } from "react"
import "./ActionButton.css"

type ActionButtonInterface = ComponentPropsWithoutRef<"button">;

export default function ActionButton({...props}: ActionButtonInterface) {
  const { className, ...restProps } = props;

  const classStr = "button-action " + (className || "");

  return (
    <button className={classStr} {...restProps}>
      {props.children}
    </button>
  );
}