/* ...numbers collects any number of arguments into an array.*/ 

function showNumbers(...numbers) {
    return numbers.length;
}

function findTotal(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log(findTotal(10, 20, 30));

console.log(showNumbers(10, 20, 30));
console.log(showNumbers(5, 10, 15, 20, 25));
console.log(showNumbers());