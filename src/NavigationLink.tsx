import { Link } from "react-router";
interface NavigationLinkInterface {
  to: string,
  children: React.ReactNode | React.ReactNode[],
}

export default function NavigationLink({ to, children }: NavigationLinkInterface) {
  return (
    <Link to={to}>
      {children}
    </Link>
  )
}