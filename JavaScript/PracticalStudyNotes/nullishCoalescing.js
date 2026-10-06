/#########################################/

/* Nullish Coalescing ??  If the value on the left is null or undefined, use the value on the right. 

?? vs || 

?? → "Is it missing?"
     null / undefined → fallback

|| → "Is it falsy?"
     false / 0 / "" / null / undefined → fallback
*/

const user = {
    name: "",
    age: 0,
    isAdmin: false
};

console.log(user.name ?? "Guest");
console.log(user.name || "Guest");

console.log(user.age ?? 18);
console.log(user.age || 18);

console.log(user.isAdmin ?? true);
console.log(user.isAdmin || true);
