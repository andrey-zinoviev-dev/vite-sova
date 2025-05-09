import "./HeadlineWrapper.css";

interface HeadlineWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function HeadlineWrapper({ children }: HeadlineWrapperProps) {
  return <div className="headline-wrapper">
    {children}
  </div>;
}

