/* Default parameters allow you to initialize parameters with default values if no argument is passed or if the argument is undefined. */

function calculatePrice(price, tax = 5) {
    return price + (price * tax / 100);
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 10));