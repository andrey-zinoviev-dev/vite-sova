// src/components/Calendar.tsx
// import { useState } from "react";
import "./Calendar.css";

interface CalendarProps<T> {
  //   onDateSelect?: (date: Date) => void;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  children: React.ReactNode | React.ReactNode[],
}

export default function Calendar<T>({ items, renderItem, children }: CalendarProps<T>) {

  return (
    <div className="calendar">
      {children}
      <ul className="calendar-grid">
        {items.map((item, index) => (  
          <li key={Math.ceil(Math.random() + index)}>{renderItem(item)}</li>
        ))}

      </ul>
    </div>
  );
}
