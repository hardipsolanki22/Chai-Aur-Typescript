import { useState } from "react"

// best prectise component name as same props name end with pops
interface OrderFormProps {
    onSubmit(order: { name: string, cups: number }): void
}

function OrderForm({ onSubmit }: OrderFormProps) {
    const [name, setName] = useState<string>("masala")
    const [cups, setCups] = useState<number>(0)

    const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ name, cups })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Chai Name</label>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Enter name"
                />
                <label htmlFor="">Cups</label>
                <input
                    type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(+e.target.value || 0)}
                    name="cups"
                    placeholder="Enter cups"
                />
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>

        </div>
    )
}
export default OrderForm
