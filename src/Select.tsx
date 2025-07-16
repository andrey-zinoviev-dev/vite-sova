import { ComponentPropsWithoutRef } from "react";
import "./Select.css";

type SelectType = ComponentPropsWithoutRef<"select"> & {
  children: React.ReactNode;
};

export default function Select({ children, ...props }: SelectType) {
  const { className, ...rest } = props;
  const classStr = "select " + (className || "");

  return (
    <select className={classStr} {...rest}>
      {children}
    </select>
  );
}
