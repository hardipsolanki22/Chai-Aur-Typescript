const chaiFlaours: string[] = ["lemon", "machala"]
const chaiPrices: number[] = [19, 39]

// same as above but diff in syntax
const rating: Array<number> = [4.5, 2.4]

// array of object
type Chai = {
    name: string;
    price: number
}

const menu: Array<Chai> = [{ name: "lemon", price: 365 }]

// readonly array

const cities: readonly string[] = ["Delhi", "Gujarat", "Hydrabad"]
// cities.push("pune")
menu.push({ name: "elaici", price: 40 })

// multidimentional array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

// tuples

let chaiTuples: [string, number];
chaiTuples = ["masala", 34]
// chaiTuples = [ 34, "lemon"] not allow order must be same as a definded 

let userInfo: [string, number, boolean?];
userInfo = ["user1", 78, true]
userInfo = ["user2", 60]

const readOnlyTuples: readonly [number, string] = [23.45, "sre"]

// recomended method when definded tunples
let chaiItems: [name: string, price: number] = ["chai", 45]

// enum
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

console.log("cupSize: ", size)

enum Status {
    PENDING = 100,
    SERVES, //101 automatic
    CANCELLED // 102
}


enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: ChaiType) {
    console.log(`Making... ${type}`)
}

makeChai(ChaiType.MASALA)
console.log("Get Chaii Types: ", ChaiType.GINGER)
// makeChai("masala") error

// not a good prectice
// ya to number ho yato staring any one data type is preferred in enum
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugar {
    LOW = 1,
    MEDIUM,
    LARGE
}

const s = Sugar.LARGE

let t: [string, number] = ["chai", 10]
t.push(1)




