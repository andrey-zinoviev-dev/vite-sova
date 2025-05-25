import { useState } from "react";
import "./Switch.css";

interface SwitchProps {
  isActive: boolean;
  invert?: boolean;
  //   onClick: () => void;
  text: string[];
  onChange: () => void;
}

export default function Switch({ isActive, text, invert, onChange }: SwitchProps) {
  const [active, setActive] = useState<boolean>(isActive ? true : false);
  //   console.log(isActive);
  return (
    <div
      className={`switch-container ${invert ? "switch-container_invert" : ""}`}
    >
      <span>{active ? text[0] : text[1]}</span>
      <div
        onClick={() => {
          setActive(!active);
          onChange();
        }}
        className={`switch ${active ? "switch_active" : ""}`}
      >
        <div
          className={`switch__button ${active ? "switch__button_active" : ""}`}
        ></div>
      </div>
    </div>
  );
}
