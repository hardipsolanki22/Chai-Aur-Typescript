const chai = {
    name: "machala chai",
    price: 23,
    isHot: true
};
let tea;
tea = {
    name: "test",
    isHot: true,
    price: 36
};
const adrakChai = {
    name: "chai",
    price: 26,
    ingredients: ["chai", "lemit", "lemon"]
};
let smallCup = {
    size: "200ml"
};
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup; // it allow to do 
const coffee = { brewTime: 5, beans: "Africa" };
const chaiBrew = coffee; // extra value ave assignable object ma to chale
const u1 = {
    pass: '47474ld',
    username: "sks",
};
// partial value likes you can updated user details in user api 
const upatedChai = (updates) => {
    console.log("updating chai with ", upatedChai);
};
upatedChai({ price: 65 });
upatedChai({ isHot: true });
upatedChai({}); // it create issue
const placeOrder = (order) => {
    console.log("chai is required");
};
const getBasicChai = {
    name: "lemon tea",
    price: 49
};
export {};
// const givePublicChai: PublicChai = {
// }
//# sourceMappingURL=object.js.map