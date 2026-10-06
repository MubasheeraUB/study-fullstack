const numbers = [5, 10, 15, 20, 25];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 15) {
        continue;
    }

    total = total + numbers[i];
}

console.log(total);