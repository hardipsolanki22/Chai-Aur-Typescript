
interface ChaiCardProps {
    name: string
    price: number
    isSpecial?: boolean
}
export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
    return (
        <article>
            <h2>{name}</h2>, {isSpecial && <span>😍</span>}
            <p>{price}</p>
        </article>
    )
}