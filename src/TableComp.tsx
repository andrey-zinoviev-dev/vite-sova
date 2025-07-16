// import GenericList from "./GenericList"
import {
  CourseInterface,
  LessonInterface,
  ModuleInterface,
  StudentCourseInterface,
  TarifInterface,
  // NewTarifType,
  EventInterface,
  StreamInterface,
  StreamLessonInterface,
  FileExtInterface,
} from "./intefaces/intefaces";
// import TableButton from "./TableButton"
// import { useNavigate } from "react-router"
import "./TableComp.css";

export interface TableCompInterface<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  children?: React.ReactNode;
  row?: boolean;
}

export default function TableComp<
  T extends
    | CourseInterface
    | ModuleInterface
    | StudentCourseInterface
    | TarifInterface
    // | NewTarifType
    | LessonInterface
    | EventInterface
    | StreamInterface
    | StreamLessonInterface
    | FileExtInterface
    | {name: string, _id: string}
>({ items, renderItem, children, row }: TableCompInterface<T>) {
  // const [draggedId, setDraggedId] = useState<string | null>(null);
  // const [hoverId, setHoverId] = useState<string | null>(null);

  // const handleDragStart = (
  //   e: React.DragEvent,
  //   lesson: StreamLessonInterface
  // ) => {
  //   setDraggedId(lesson._id);
  //   e.dataTransfer.effectAllowed = "move";
  // };

  // const handleDragOver = (e: React.DragEvent, targetId: string) => {
  //   e.preventDefault();
  //   e.dataTransfer.dropEffect = "move";

  //   if (draggedId && draggedId !== targetId) {
  //     setHoverId(targetId);

  //     const newOrder = [...items];
  //     const draggedIndex = newOrder.findIndex(
  //       (item) => getItemId?.(item) === draggedId
  //     );
  //     const targetIndex = newOrder.findIndex(
  //       (item) => getItemId?.(item) === targetId
  //     );

  //     if (draggedIndex !== -1 && targetIndex !== -1) {
  //       const [removed] = newOrder.splice(draggedIndex, 1);
  //       newOrder.splice(targetIndex, 0, removed);

  //       onReorder?.(newOrder);
  //     }

  //     // Update order in real-time during drag
  //     // setOrderedLessons((prevLessons) => {
  //     //   const draggedIndex = prevLessons.findIndex(
  //     //     (lesson) => (lesson as StreamLessonInterface)._id === draggedId
  //     //   );
  //     //   const targetIndex = prevLessons.findIndex(
  //     //     (lesson) => (lesson as StreamLessonInterface)._id === targetId
  //     //   );

  //     //   if (draggedIndex === -1 || targetIndex === -1) {
  //     //     return prevLessons;
  //     //   }

  //     //   const newOrder = [...prevLessons];
  //     //   const [removed] = newOrder.splice(draggedIndex, 1);
  //     //   newOrder.splice(targetIndex, 0, removed);
  //     //   return newOrder;
  //     // });
  //   }
  // };

  // const handleDragLeave = () => {
  //   setHoverId(null);
  // };

  // const handleDragEnd = () => {
  //   setDraggedId(null);
  //   setHoverId(null);
  // };

  // const handleDrop = (e: React.DragEvent, targetId: string) => {
  //   e.preventDefault();

  //   if (!draggedId || draggedId === targetId) {
  //     setDraggedId(null);
  //     setHoverId(null);
  //     return;
  //   }

  //   // Order is already updated during drag, just clean up
  //   setDraggedId(null);
  //   setHoverId(null);
  // };

  return (
    <ul className={`table-ul ${row ? "table-ul_row" : ""}`}>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
      {children}
    </ul>
  );
}
