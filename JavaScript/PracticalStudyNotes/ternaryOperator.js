/#########################################/
/* Ternary Operator ? :  A concise way to write an if-else statement. */

const user = {
    name: "",
    age: 22,
    isAdmin: false
};

const name = user.name || "Guest";
const status = user.age >= 18 ? "Adult" : "Minor";
const access = user.isAdmin ? "Admin" : "User";

console.log(name);
console.log(status);
console.log(access);
