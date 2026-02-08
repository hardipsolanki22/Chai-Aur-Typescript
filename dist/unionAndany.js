// Union Type Annotation
let subs = "1M";
let apiRequiestStatus = "pending";
// apiRequiestStatus = "hardip" not allow
let airlineSeat = "middle";
airlineSeat = "aisle"; // it give suggetion 
// Any - Any case Avoid any
const orders = ["12", "20", "65", "23"];
let currentOrder;
for (let order of orders) {
    if (order === "20")
        currentOrder = order;
    break;
    currentOrder = "23";
}
// currentOrder is any type 
// currentOrder = 12  // so it not a good prectice
console.log(currentOrder);
export {};
//# sourceMappingURL=unionAndany.js.map