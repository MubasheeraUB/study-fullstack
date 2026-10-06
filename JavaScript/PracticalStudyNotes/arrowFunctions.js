const square1 = n => n * n;              // ✅ implicit

const square2 = n => {
    return n * n;                       // ✅ explicit
};

const square3 = n => {
    n * n;                              // ❌ undefined
};

console.log("square1(5):", square1(5));
console.log("square2(5):", square2(5));
console.log("square3(5):", square3(5));