import { faBars } from "@fortawesome/free-solid-svg-icons";
import TableComp from "./TableComp";
import { StreamLessonInterface } from "./intefaces/intefaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./TableDrag.css";

interface TableDragInterface<T> {
  getItemId: (item: T) => string;
  items: T[];
  children?: React.ReactNode;
}

export default function TableDrag<T extends StreamLessonInterface>({
  items,
  children,
  //   onReorder,
  getItemId,
}: TableDragInterface<T>) {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [localItems, setLocalItems] = useState<T[]>(items);
  //   const [hoverId, setHoverId] = useState<string | null>(null);

  const handleDragStart = (
    e: React.DragEvent,
    lesson: StreamLessonInterface
  ) => {
    setDraggedId(lesson._id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    if (draggedId && draggedId !== targetId) {
      //   setHoverId(targetId);

      const newOrder = [...localItems];

      const draggedIndex = newOrder.findIndex(
        (item) => getItemId?.(item) === draggedId
      );
      const targetIndex = newOrder.findIndex(
        (item) => getItemId?.(item) === targetId
      );

      if (draggedIndex !== -1 && targetIndex !== -1) {
        const [removed] = newOrder.splice(draggedIndex, 1);
        newOrder.splice(targetIndex, 0, removed);
        console.log(draggedId, targetId, newOrder);
        // onReorder?.(newOrder);
        setLocalItems(newOrder);
      }
    }
  };

  //   const handleDragLeave = () => {
  //     setHoverId(null);
  //   };

  const handleDragEnd = () => {
    setDraggedId(null);
    // setHoverId(null);
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();

    if (!draggedId || draggedId === targetId) {
      setDraggedId(null);
      return;
    }

    setDraggedId(null);
  };

  return (
    <TableComp
      items={localItems}
      renderItem={(item, index) => {
        const isDragging = draggedId === getItemId?.(item);
        // const isHovered = hoverId === getItemId?.(item) && !isDragging;

        return (
          <li
            key={item._id}
            draggable={true}
            className={`li-drag ${isDragging ? "dragging" : ""}`}
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={(e) => handleDragOver(e, item._id)}
            // onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, item._id)}
            onDragEnd={handleDragEnd}
          >
            <div className="li-drag__content">
              <span className="li-drag__index">
                {(index + 1).toString().padStart(2, "0")}.
                <span className="li-drag__title">{item.title}</span>
              </span>
              <FontAwesomeIcon icon={faBars} className="drag-handle" />
            </div>
          </li>
        );
      }}
      row={true}
    >
      {children}
    </TableComp>
  );
}
