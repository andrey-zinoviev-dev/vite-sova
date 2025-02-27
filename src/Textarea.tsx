import { ComponentPropsWithoutRef } from "react"
import "./Textarea.css"
type TextAreaInterface = ComponentPropsWithoutRef<"textarea">

export default function Textarea(props: TextAreaInterface) {
  return (
    <textarea {...props} className="textarea" contentEditable={false} ></textarea>
  )
}