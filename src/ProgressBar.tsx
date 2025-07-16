import "./ProgressBar.css";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return <div className="progress-bar">
    <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
  </div>;
}