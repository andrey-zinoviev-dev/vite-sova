import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";
import TableComp, { TableCompInterface } from "./TableComp";
import {
  CourseInterface,
  ModuleInterface,
  StudentCourseInterface,
  TarifInterface,
  NewTarifType,
  LessonInterface,
  EventInterface,
} from "./intefaces/intefaces";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface AdminTableInterface<T> extends TableCompInterface<T> {
  handleAdd: () => void;
  buttonText: string;
}

export default function AdminTable<
  T extends
    | CourseInterface
    | ModuleInterface
    | StudentCourseInterface
    | TarifInterface
    | NewTarifType
    | LessonInterface
    | EventInterface
>({ items, renderItem, children, handleAdd, buttonText }: AdminTableInterface<T>) {
  return (
    <>
      <TableComp items={items} renderItem={renderItem}>
        <ActionButton onClick={handleAdd} className="button-action_new">
          {buttonText}
          <FontAwesomeIcon icon={faPlus} />
        </ActionButton>
      </TableComp>
      {children}
    </>
  );
}
