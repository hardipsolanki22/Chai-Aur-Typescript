

let response: any = "43"

let numericaLength = (response as string).length  // response.length // not give suggetion

console.log("resonde of number length: ", numericaLength)

type Book = {
    name: string
}

let bookString = '{"name": "Squede"}' // single quote when use string always use signle quete first 

let bookObj = JSON.parse(bookString) as Book

console.log(bookObj.name) // access name whene assign force fully type using as 

const inputElement = document.getElementById("username") as HTMLInputElement
console.log(inputElement.innerText) // showing suggetion automatically 

let value: any = "chai"
value = 34
value = [1, 3, 5, 3]
value.toUpperCase()

// unknow
let newValue: unknown
newValue = "chai"
newValue = 34
// newValue = [1, 3, 5, 3]`

if (typeof newValue === "string") {
    newValue.toUpperCase()
}

let uncertain: unknown = "Hello Gujarat" // :any it not showing error (warning)

// uncertain.toUpperCase()  //  Error: Object is of type 'unknown'
// uncertain()             // Error
// uncertain[0]            // Error

// strically check when use unkown
if (typeof uncertain === "string") {
    console.log(uncertain.toUpperCase())
}

if (typeof uncertain === "number") {
    console.log(uncertain.toFixed(2))
}

// special in eror handling
try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log("error: ", error)
}

let data: unknown = "chai aur code"
let strData: string = data as string

// never 

type Role = "admin" | "user" // | "superadmin"

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirected to admin deshboard")
        return
    }

    if (role === "user") {
        console.log("Redirected to user deshboard")
        return
    }
    role // never beacause all case is handle but id superadmin is exist then it could be superadin
}


function iWillNeverRtn(): never {
    while (true) { } // like a web server 
}