import "./ErrorSpan.css";
interface ErrorSpan {
    text: string,
}

export default function ErrorSpan({text}: ErrorSpan) {
    return (
        <span className="error-span">{text}</span>
    )
}