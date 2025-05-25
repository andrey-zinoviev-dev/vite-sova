import CommonCard from "./CommonCard";
// import { LessonInterface, StreamInterface } from "./intefaces/intefaces";
import Switch from "./Switch";

interface SwtichCardProps {
  title: string;
  isActive: boolean;
  invert: boolean;
  text: string[];
  onChange: () => void;
}

export default function SwtichCard({
  title,
  isActive,
  invert,
  text,
  onChange,
}: SwtichCardProps) {
  return (
    <CommonCard title={title}>
      <Switch invert={invert} isActive={isActive} text={text} onChange={onChange}></Switch>
    </CommonCard>
  );
}
