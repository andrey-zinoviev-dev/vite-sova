import "./CardHeadline.css";

interface CardHeadlineInterface {
    title: string;
}

export default function CardHeadline({ title }: CardHeadlineInterface) {
    return (
        <h3 className="card-headline">
            {title}
        </h3>
    )
}