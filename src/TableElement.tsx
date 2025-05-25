import { ComponentPropsWithoutRef } from "react";
import "./TableElement.css";

type TableElementProps = ComponentPropsWithoutRef<"article"> & {
  children: React.ReactNode | React.ReactNode[];
};

export default function TableElement({ children, ...props }: TableElementProps) {
    const { className, ...rest } = props;
    return (
        <article className={`table-article ${className}`} {...rest}>
            {children}
        </article>
    )
}