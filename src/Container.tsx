interface ContainerInterface {
    children: React.ReactNode | React.ReactNode[],
};

import "./Container.css";

export function Container ({ children }: ContainerInterface) {
    return (
        <div className="container">
            {children}
        </div>
    )
}