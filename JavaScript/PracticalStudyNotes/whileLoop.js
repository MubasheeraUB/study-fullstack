/#########################################/
/* Keep repeating while the condition is true. */

let i = 1;
let total = 0;
while (i <= 10) {
    if (i % 2 === 0) {
        total += i;
    }

    i++;
}
console.log(total);
