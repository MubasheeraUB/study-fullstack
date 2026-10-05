/* A callback is a function passed as an argument to another function and invoked by that function. */

function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Mubasheera"));
}

processUser(greet);

/#########################################/
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 5, add));

/#########################################/

const numbers = [10, 20, 30];

const result = numbers.map((number, index) => {
    return number + index;
});

console.log(result);

/#########################################/

const names = ["A", "B", "C"];

const result1 = names.map((name, index) => {
    return name + index;
});

console.log(result1);


/* Callback with return */

const numbersArray = [1, 2, 3];

const resultArray = numbersArray
    .map(n => n * 2)
    .filter(n => n > 2);

console.log(resultArray );