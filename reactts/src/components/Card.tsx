import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string
    footer?: ReactNode // react node means all html element
}

const Card = ({ title, children, footer }: CardProps) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
            {footer && <footer> {footer} </footer>
            }

        </div>
    )
}

export default Card
