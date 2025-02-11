import { Link } from "react-router";
interface NavigationLinkInterface {
  to: string,
  children: React.ReactNode | React.ReactNode[],
  available: boolean
}
import "./NavigationLink.css"

export default function NavigationLink({ to, children, available }: NavigationLinkInterface) {
  return (
    <Link className="link" onClickCapture={() => {
      console.log('link clicked');
    }} style={{pointerEvents: available ? "all" : "none"}} to={to}>
      {children}
    </Link>
  )
}