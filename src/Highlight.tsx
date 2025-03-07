import "./Highlight.css"

interface HighlightInterface {
    children: React.ReactNode | React.ReactNode[]
}

export default function Highlight({ children }: HighlightInterface) {
    return (
        <div className="highlight">
            {children}
        </div>
    )
}