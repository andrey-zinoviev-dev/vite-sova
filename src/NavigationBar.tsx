import "./NavigationBar.css";
import { useNavigate } from "react-router";
interface NavigationBarProps {
  items: { title: string; link: string }[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}
export default function NavigationBar({
  items,
  activeTab,
  setActiveTab,
}: NavigationBarProps) {
  const navigate = useNavigate();
  return (
    <ul className="navigation-bar">
      {items.map((item, index) => (
        <li key={item.title}>
          <button
            onClick={() => {
              setActiveTab(index);
              navigate(item.link);
            }}
            //   className={
            //     "navigation-bar__button"
            //     activeTab === index ? "navigation-bar__button_active" : ""
            //   }
            className={`navigation-bar__button ${
              activeTab === index ? "navigation-bar__button_active" : ""
            }`}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
