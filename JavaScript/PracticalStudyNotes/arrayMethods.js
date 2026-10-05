 /#########################################/
// filter():
/*checks EVERY element and builds a new array containing all elements whose callback returns true.*/

const numbers = [3, 8, 12, 17, 21, 25]; 
const result = numbers.filter((number, index) => { 
    return number > 10 && index % 2 === 0; 
}); 
console.log(result); // [12, 21]

/#########################################/
// find() → find the first matching element 

const numbersFind = [4, 7, 13, 18, 21, 25];

const resultFind = numbersFind.find((numbersFind, index) => {
    return numbersFind > 15 && index % 2 === 0;
});

console.log(resultFind);

/#########################################/
// reduce() takes many array values and reduces them into one final value. 

const numbersReduce = [5, 10, 15];

const resultReduce = numbersReduce.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(resultReduce);

// combined

const numbersCombined = [5, 10, 15, 20, 25];

const resultCombined = numbersCombined
    .filter(n => n > 10)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);

console.log(resultCombined);
