// Union Type Annotation
let subs: number | string = "1M"

let apiRequiestStatus: "pending" | "success" | "error" = "pending"
// apiRequiestStatus = "hardip" not allow

let airlineSeat: "aisle" | "window" | "middle" = "middle"
airlineSeat = "aisle" // it give suggetion 

// Any - Any case Avoid any

const orders = ["12", "20", "65", "23"]
let currentOrder: string | undefined;

for (let order of orders) {
    if (order === "20") currentOrder = order
    break
    currentOrder = "23"
}

// currentOrder is any type 
// currentOrder = 12  // so it not a good prectice
console.log(currentOrder)