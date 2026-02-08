import type { Chai } from "../typs/types"
import { ChaiCard } from "./ChaiCard"

interface ChaiListProps {
    items: Chai[]
}

function ChaiList({ items }: ChaiListProps) {
    return (
        <div>
            {items.map((item) => (
                <ChaiCard key={item.id}
                    name={item.name}
                    price={item.price}
                    isSpecial={item.price > 20}
                />
            ))}

        </div>
    )
}

export default ChaiList
