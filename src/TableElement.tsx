interface TableElementInterface {
    children: React.ReactNode | React.ReactNode[],
    // buttonText: string,
};
import "./TableElement.css";

export default function TableElement({ children }: TableElementInterface) {
    return (
        <article className="table-article">
            {children}
            {/* <button>{buttonText}</button> */}
        </article>
    )
}