interface Todo {
    userId: number
    id: number
    title: string
    isCompleted: boolean
}

; (async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/2")
        if (!res.ok) {
            throw new Error(`HTTP error ${res.status}`)
        }
        const data: Todo = await res.json()
        console.log(data)
    } catch (error: any) {
        if (error instanceof Error) {
            console.log("Error in catch: ", error.message)
        }
        console.log("error c: ", error)
    }
})()
