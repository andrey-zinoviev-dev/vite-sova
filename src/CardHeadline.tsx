import "./CardHeadline.css";
import EditButton from "./EditButton";
import EditWrapper from "./EditWrapper";
// import { useAppSelector } from "./hooks";
// import Highlight from "./Highlight";

interface CardHeadlineInterface {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  onClick?: () => void | undefined,
  isAdmin?: boolean,
}

export default function CardHeadline({
  title,
  children,
  onClick,
  isAdmin,
}: CardHeadlineInterface) {
  // const isAdmin = useAppSelector((state) => {
  //   return state.user.roles.includes("admin");
  // });

  return isAdmin ? (
    <EditWrapper>
      <h3 className="card-headline">{title}</h3>
      {onClick && <EditButton onClick={onClick} />}
    </EditWrapper>
  ) : (
    <>
      {children} 
      <h3 className="card-headline">{title}</h3>
    </>
  );
}
