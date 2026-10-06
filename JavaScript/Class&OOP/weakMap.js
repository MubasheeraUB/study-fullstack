let weakMap = new WeakMap();

let user = { name: "Mubasheera" };

weakMap.set(user, 100);

console.log(weakMap.has(user));

let anotherUser = user;

user = null;

console.log(weakMap.has(anotherUser));