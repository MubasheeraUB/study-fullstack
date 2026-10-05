function testA() {
    console.log("Hello");
}

function testB() {
    return "Hello";
}

let a = testA();
let b = testB();

console.log("A:", a);
console.log("B:", b);