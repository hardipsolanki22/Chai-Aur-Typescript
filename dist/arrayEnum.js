const chaiFlaours = ["lemon", "machala"];
const chaiPrices = [19, 39];
// same as above but diff in syntax
const rating = [4.5, 2.4];
const menu = [{ name: "lemon", price: 365 }];
// readonly array
const cities = ["Delhi", "Gujarat", "Hydrabad"];
// cities.push("pune")
menu.push({ name: "elaici", price: 40 });
// multidimentional array
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
// tuples
let chaiTuples;
chaiTuples = ["masala", 34];
// chaiTuples = [ 34, "lemon"] not allow order must be same as a definded 
let userInfo;
userInfo = ["user1", 78, true];
userInfo = ["user2", 60];
const readOnlyTuples = [23.45, "sre"];
// recomended method when definded tunples
let chaiItems = ["chai", 45];
// enum
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
console.log("cupSize: ", size);
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVES"] = 101] = "SERVES";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // 102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making... ${type}`);
}
makeChai(ChaiType.MASALA);
console.log("Get Chaii Types: ", ChaiType.GINGER);
// makeChai("masala") error
// not a good prectice
// ya to number ho yato staring any one data type is preferred in enum
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
var Sugar;
(function (Sugar) {
    Sugar[Sugar["LOW"] = 1] = "LOW";
    Sugar[Sugar["MEDIUM"] = 2] = "MEDIUM";
    Sugar[Sugar["LARGE"] = 3] = "LARGE";
})(Sugar || (Sugar = {}));
const s = Sugar.LARGE;
let t = ["chai", 10];
t.push(1);
export {};
//# sourceMappingURL=arrayEnum.js.map