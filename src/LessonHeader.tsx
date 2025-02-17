import Logo from "./Logo";
import "./LessonHeader.css"
interface LessonHeaderInterface {
    children: React.ReactNode | React.ReactNode[],
}
export default function LessonHeader({ children }: LessonHeaderInterface) {
    return (
        <div className="header-lesson">
            <Logo />
            {children}
        </div>
    )
}