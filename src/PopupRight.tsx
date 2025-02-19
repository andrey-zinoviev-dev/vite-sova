import Popup from "./Popup";
// import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice";

interface PopupRightInterface {
    // course: CourseInterface,
    // module: ModuleExtInterface,
    // closePopup: () => void,
    children: React.ReactNode | React.ReactNode[],
}

export default function PopupRight({ children }: PopupRightInterface) {
    return (
        <Popup className="popup_right popup_high">
            {children}
        </Popup>
    )
}