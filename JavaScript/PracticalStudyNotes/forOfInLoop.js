/#########################################/

/* 
for...of  loop 
gives the values/elements of an iterable, not its indexes. */

const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

/#########################################/

/*
for...in  loop 
For objects, for...in is commonly useful because objects have keys index contains the indexes/keys of the array (in)
*/
const user = {
    name: "Mubasheera",
    age: 23,
    role: "Developer"
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
