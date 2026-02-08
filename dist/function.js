function makeChai(type, cups) {
    console.log(`Making ${cups} of ${type}`);
}
makeChai("machala", 2);
function getChaiPrice(type) {
    if (type === "elichi")
        return 40;
    if (type === "lomon")
        return 30;
    return 10;
}
getChaiPrice("elichi");
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
function logChai() {
    console.log("chai is ready");
}
// optional prefred method and if multiple perameter than alway write optional
// perameter end the end 
// function orderChai(type?:string){
//     console.log("chai...")
// }
// optional 
// same default value can writ end the end
function orderChai(type = "machala") {
    console.log("chai...");
}
function createChai(order) {
    return 34;
}
export {};
//# sourceMappingURL=function.js.map