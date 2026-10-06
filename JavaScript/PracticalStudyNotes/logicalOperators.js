/#########################################/

/* 
1. &&
If A is falsy, it immediately returns A.
If A is truthy, it continues and returns B.
*/

console.log(null && "Hello");
console.log("User" && 0);
console.log(5 && "JavaScript");
console.log(false && "React");

/* 2. ||  =  returns the FIRST truthy value. */

const user = {
    name: "",
    age: 0,
    address: null
};

console.log(user.name || "Guest");
console.log(user.age ?? 18);
console.log(user.age || 18);
console.log(user.address?.city ?? "Unknown");

/* 3. !  =  NOT operator, returns the opposite boolean value. */

console.log(!null);
console.log(!undefined);
console.log(!"0");
console.log(![]);
console.log(!{});
console.log(!!"Hello");
