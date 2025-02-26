interface TableElementInterface {
    children: React.ReactNode | React.ReactNode[],
};
import "./TableElement.css";

export default function TableElement({ children }: TableElementInterface) {
    return (
        <article className="table-article">
            {children}
        </article>
    )
}