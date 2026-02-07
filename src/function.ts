function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} of ${type}`)
}

makeChai("machala", 2)

type Chai = "machala" | "lomon" | "elichi"
function getChaiPrice(type: Chai): number {
    if (type === "elichi") return 40
    if (type === "lomon") return 30
    return 10
}

getChaiPrice("elichi")


function makeOrder(order: string) {
    if (!order) return null
    return order
}

function logChai(): void {// there is no return
    console.log("chai is ready")
}

// optional prefred method and if multiple perameter than alway write optional
// perameter end the end 

// function orderChai(type?:string){
//     console.log("chai...")
// }

// optional 
// same default value can writ end the end
function orderChai(type: string = "machala") {
    console.log("chai...")
}


function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number {
    return 34;
}