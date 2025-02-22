import Popup from "./Popup";

interface PopupRightInterface {
    closePopup: () => void,
    children: React.ReactNode | React.ReactNode[],
}

export default function PopupRight({ children, closePopup }: PopupRightInterface) {
    return (
        <Popup closePoup={closePopup} className="popup_right popup_high">
            {children}
        </Popup>
    )
}