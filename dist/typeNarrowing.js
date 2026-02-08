function chai(kind) {
    if (typeof kind === "string")
        return `Making ${kind.toLocaleUpperCase()}...`; // It give me methods based on type - type narrowing
    return `Chai order ${kind.toFixed(2)}`;
}
console.log(chai(34));
function serveChai(msg) {
    if (msg)
        return `Serving ${msg}`;
    return `Serving default value`;
}
console.log(serveChai("Hitesh sr"));
function orderChai(size) {
    if (size === "small")
        return "Small cutting";
    if (size === "large" || size === "medeum")
        return "Extra chai";
    return size;
}
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class CuttingChai {
    serve() {
        return `Serving Cutting Chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai)
        return chai.serve();
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        typeof obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
// console.log(`isChai Orders: ${isChaiOrder({type: "d", sugar: 3})}`)
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`;
    }
    return `Serving custome chai ${item}`;
}
console.log(serveOrder({ sugar: 23, type: "r88" }));
console.log(serveOrder("desi chai"));
function getChai(chai) {
    switch (chai.type) {
        case "Machala":
            return "Machala chai";
        case "desi":
            return "desi chai";
        case "elaichi":
            return "elaichi chai";
    }
}
// there is no need for default case 
console.log(getChai({ spicelevel: 23, type: "desi" }));
function isStringArray(arr) {
    return (arr !== null);
}
console.log("isStringArr: ", isStringArray("io"));
export {};
//# sourceMappingURL=typeNarrowing.js.map