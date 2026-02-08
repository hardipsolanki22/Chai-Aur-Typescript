let response = "43";
let numericaLength = response.length; // response.length // not give suggetion
console.log("resonde of number length: ", numericaLength);
let bookString = '{"name": "Squede"}'; // single quote when use string always use signle quete first 
let bookObj = JSON.parse(bookString);
console.log(bookObj.name); // access name whene assign force fully type using as 
const inputElement = document.getElementById("username");
console.log(inputElement.innerText); // showing suggetion automatically 
let value = "chai";
value = 34;
value = [1, 3, 5, 3];
value.toUpperCase();
// unknow
let newValue;
newValue = "chai";
newValue = 34;
// newValue = [1, 3, 5, 3]`
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
let uncertain = "Hello Gujarat"; // :any it not showing error (warning)
// uncertain.toUpperCase()  //  Error: Object is of type 'unknown'
// uncertain()             // Error
// uncertain[0]            // Error
// strically check when use unkown
if (typeof uncertain === "string") {
    console.log(uncertain.toUpperCase());
}
if (typeof uncertain === "number") {
    console.log(uncertain.toFixed(2));
}
// special in eror handling
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error: ", error);
}
let data = "chai aur code";
let strData = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirected to admin deshboard");
        return;
    }
    if (role === "user") {
        console.log("Redirected to user deshboard");
        return;
    }
    role; // never beacause all case is handle but id superadmin is exist then it could be superadin
}
function iWillNeverRtn() {
    while (true) { } // like a web server 
}
export {};
//# sourceMappingURL=moreType.js.map