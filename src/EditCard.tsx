import ActionButton from "./ActionButton";
// import CardHeadline from "./CardHeadline";
import CommonCard from "./CommonCard";
import EditButton from "./EditButton";
// import EditWrapper from "./EditWrapper";
// import { LessonInterface, ModuleExtInterface, StreamInterface } from "./intefaces/intefaces";
// import { TarifInterface } from "./intefaces/intefaces";
// import TableElement from "./TableElement";

interface EditCardInterface {
    title: string;
    index: string;
    children?: React.ReactNode;
    onClick: () => void;
    onDeleteClick: () => void;
    buttonText: string;
}

export default function EditCard({ title, index, children, onClick, buttonText, onDeleteClick }: EditCardInterface) {
    return (
        <CommonCard title={title} isAdmin={true} onClick={onClick} index={index} headlineComp={<EditButton onClick={onClick} />}>
            {children}
            <ActionButton
              className="button-action_delete"
              onClick={onDeleteClick}
            >
              {buttonText}
            </ActionButton>
        </CommonCard>
    );
}