import "./SectionHeadline.css";

export default function SectionHeadline({ children }: { children: React.ReactNode }) {
    return (
        <div className="section-headline">
            {children}
        </div>
    )
}