import { ComponentPropsWithoutRef } from "react"
import "./ActionButton.css"

type ActionButtonInterface = ComponentPropsWithoutRef<"button">;

export default function ActionButton({...props}: ActionButtonInterface) {
    return (
        <button className="button-action" {...props}>
            
        </button>
    )
}