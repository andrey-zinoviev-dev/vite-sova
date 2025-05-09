interface EditElementWrapperProps {
    children: React.ReactNode;
}

import "./EditElementWrapper.css";

export default function EditElementWrapper({children}: EditElementWrapperProps) {
    return (
        <div className="edit-element-wrapper">
            {children}
            {/* <h2>Общие данные</h2> */}
        </div>
    )
}