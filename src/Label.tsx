import { ComponentPropsWithoutRef } from "react"
import "./Label.css"

type LabelType = ComponentPropsWithoutRef<"label"> & {
    children: React.ReactNode
}

export default function Label({children, ...props}: LabelType) {
    return (
        <label className="label" {...props}>
            {children}
        </label>
    )
}