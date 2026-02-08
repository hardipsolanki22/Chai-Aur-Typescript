import axios from "axios";
import type { AxiosResponse } from "axios";


interface Todo {
    userId: number
    id: number
    title: string
    isCompleted: boolean
}

; (async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/2")
        console.log("Todos: ", response.data)
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error: ", error.message)
            if (error.response) {
                console.log(error.response.status);

            }
        }
    }
})()


