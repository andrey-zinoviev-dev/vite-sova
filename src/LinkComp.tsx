import { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router";

type LinkCompProps = ComponentPropsWithoutRef<typeof Link>

export default function LinkComp({className, ...props}: LinkCompProps) {
    return <Link className={`link-comp ${className}`} {...props}>

    </Link>
}