// import { FormStatus } from "./utils/utils";

interface StatusInterface {
  children: React.ReactNode | React.ReactNode[];
//   status: FormStatus;
}

export default function Status({ children }: StatusInterface) {
  return <div>{children}</div>;
}