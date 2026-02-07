const chai = {
    name: "machala chai",
    price: 23,
    isHot: true
}

let tea: {
    name: string
    price: number
    isHot: boolean
}

tea = {
    name: "test",
    isHot: true,
    price: 36
}

// it reusable in more than one object
type Tea = {
    name: string
    price: number
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "chai",
    price: 26,
    ingredients: ["chai", "lemit", "lemon"]
}

type Cup = { size: string }
let smallCup: Cup = {
    size: "200ml"
}

let bigCup = { size: "500ml", material: "steel" }

smallCup = bigCup // it allow to do 

type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "Africa" }
const chaiBrew: Brew = coffee // extra value ave assignable object ma to chale

type User = {
    username: string
    pass: string
}

const u1: User = {
    pass: '47474ld',
    username: "sks",
}

// clearity code
type Item = { name: string; quentiry: number }
type Address = { state: string; pin: number }

type Order = {
    id: string;
    items: Item[];
    addrs: Address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

// partial value likes you can updated user details in user api 
const upatedChai = (updates: Partial<Chai>) => {
    console.log("updating chai with ", upatedChai)
}

upatedChai({ price: 65 })
upatedChai({ isHot: true })
upatedChai({}) // it create issue

type ChaiOrder = {
    name?: string;
    qut?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log("chai is required")
}

//placeOrder({}) // it give error bcs all fields are required

type ChaiX = {
    name: string;
    price: number;
    isHot: boolean
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">

const getBasicChai: BasicChaiInfo = {
    name: "lemon tea",
    price: 49
}

type ChaiY = {
    name: string;
    price: number;
    isHot: boolean;
    secretingredients: string[]
}

type PublicChai = Omit<ChaiY, "secretingredients" >

// const givePublicChai: PublicChai = {
 
// }