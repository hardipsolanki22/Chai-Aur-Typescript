// data or object ko shape dene
interface Chai {
    flevor: string
    price: number
    milk?: boolean
}

const masalaChai: Chai = {
    flevor: "masala",
    price: 48
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {
    id: 1,
    name: "chai code caffe"
}

// s.id = 3 can not chnage 

interface DiscountCal {
    (price: number): number
}

const apply50: DiscountCal = (p) => p * 0.5

interface TeaMachin {
    start(price: number, name: string): void
    stop(): void
}

const machin: TeaMachin = {
    start(price, name) { },
    stop() { }
}

// index signature  diff name but same type of value
interface ChaiRating {
    [flavor: string]: number
}

const rating: ChaiRating = {
    masala: 4.5,
    ginger: 4.5,
    lemon: 4.5,
}

// interface duplicate hoy shake end the end te merge thay che
interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    age: 23,
    name: ""
}

// extend inerface
interface A { a: string }
interface B { b: string }
interface C extends A, B { c: string }



