import Logo from "./Logo";
import "./LessonHeader.css"
import { Container } from "./Container";
interface LessonHeaderInterface {
    children: React.ReactNode | React.ReactNode[],
}
export default function LessonHeader({ children }: LessonHeaderInterface) {
    return (
        <div className="header-lesson">
            <Container>
                <div className="header-lesson__content">
                    <Logo />
                    {children}
                </div>
            </Container>
        </div>
    )
}