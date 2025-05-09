import { useState } from "react";
import "./Switch.css";

interface SwitchProps {
  isActive: boolean;
//   onClick: () => void;
  text: string;
}

export default function Switch({ isActive, text }: SwitchProps) {
    const [active, setActive] = useState<boolean>(isActive ? true : false);
//   console.log(isActive);
  return (
    <div className="switch-container">
      <span>{text}</span>
      <div
        onClick={() => {
            setActive(!active);
        }}
        className={`switch ${active ? "switch_active" : ""}`}
      >
        <div
          className={`switch__button ${
            active ? "switch__button_active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
