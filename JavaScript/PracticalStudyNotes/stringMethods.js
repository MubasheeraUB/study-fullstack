/* 
 ============================================================
 JAVASCRIPT STRING METHODS — SINGLE REVISION PROGRAM
 ============================================================
*/

/* 
 ------------------------------------------------------------
 COMMAND 1: length → Get the number of characters
 ------------------------------------------------------------
*/

let text = "JavaScript";

console.log(text.length);
// Output: 10



// ------------------------------------------------------------
// COMMAND 2: toUpperCase() → Convert letters to uppercase
// ------------------------------------------------------------

console.log(text.toUpperCase());
// Output: JAVASCRIPT



// ------------------------------------------------------------
// COMMAND 3: toLowerCase() → Convert letters to lowercase
// ------------------------------------------------------------

console.log(text.toLowerCase());
// Output: javascript



// ------------------------------------------------------------
// COMMAND 4: includes() → Check whether a value exists
// ------------------------------------------------------------

console.log(text.includes("Script"));
// Output: true



// ------------------------------------------------------------
// COMMAND 5: startsWith() → Check whether string starts with value
// ------------------------------------------------------------

console.log(text.startsWith("Java"));
// Output: true



// ------------------------------------------------------------
// COMMAND 6: endsWith() → Check whether string ends with value
// ------------------------------------------------------------

console.log(text.endsWith("Script"));
// Output: true



// ------------------------------------------------------------
// COMMAND 7: slice() → Extract part of a string
// ------------------------------------------------------------

console.log(text.slice(0, 4));
// Output: Java

console.log(text.slice(4, 10));
// Output: Script



// ------------------------------------------------------------
// COMMAND 8: substring() → Extract part using non-negative indexes
// ------------------------------------------------------------

console.log(text.substring(4, 10));
// Output: Script



// ------------------------------------------------------------
// COMMAND 9: trim() → Remove whitespace from both ends
// ------------------------------------------------------------

let username = "   Mubasheera   ";

console.log(username.trim());
// Output: Mubasheera



// ------------------------------------------------------------
// COMMAND 10: replace() → Replace the first matching value
// ------------------------------------------------------------

let language = "I like PHP and PHP";

console.log(language.replace("PHP", "JavaScript"));
// Output: I like JavaScript and PHP



// ------------------------------------------------------------
// COMMAND 11: replaceAll() → Replace all matching values
// ------------------------------------------------------------

console.log(language.replaceAll("PHP", "JavaScript"));
// Output: I like JavaScript and JavaScript



// ------------------------------------------------------------
// COMMAND 12: split() → Convert string → array
// ------------------------------------------------------------

let word = "Java";

console.log(word.split(""));
// Output: [ 'J', 'a', 'v', 'a' ]



// ------------------------------------------------------------
// COMMAND 13: join() → Convert array → string
// ------------------------------------------------------------

let letters = ["J", "a", "v", "a"];

console.log(letters.join(""));
// Output: Java



// ------------------------------------------------------------
// COMMAND 14: charAt() → Get character at an index
// ------------------------------------------------------------

console.log(text.charAt(0));
// Output: J

console.log(text.charAt(4));
// Output: S



// ------------------------------------------------------------
// COMMAND 15: indexOf() → Find the first matching index
// ------------------------------------------------------------

let fruit = "banana";

console.log(fruit.indexOf("a"));
// Output: 1

console.log(fruit.indexOf("z"));
// Output: -1



// ------------------------------------------------------------
// COMMAND 16: lastIndexOf() → Find the last matching index
// ------------------------------------------------------------

console.log(fruit.lastIndexOf("a"));
// Output: 5



// ------------------------------------------------------------
// COMMAND 17: concat() → Combine strings
// ------------------------------------------------------------

let firstName = "Mubasheera";
let lastName = "UB";

console.log(firstName.concat(" ", lastName));
// Output: Mubasheera UB



// ------------------------------------------------------------
// COMMAND 18: repeat() → Repeat a string
// ------------------------------------------------------------

console.log("Hi ".repeat(3));
// Output: Hi Hi Hi



// ------------------------------------------------------------
// COMMAND 19: padStart() → Add characters to the beginning
// ------------------------------------------------------------

let number = "7";

console.log(number.padStart(3, "0"));
// Output: 007



// ------------------------------------------------------------
// COMMAND 20: padEnd() → Add characters to the end
// ------------------------------------------------------------

console.log(number.padEnd(3, "0"));
// Output: 700



// ------------------------------------------------------------
// COMMAND 21: charCodeAt() → Get numeric character code
// ------------------------------------------------------------

console.log("A".charCodeAt(0));
// Output: 65

console.log("B".charCodeAt(0));
// Output: 66



// ------------------------------------------------------------
// COMMAND 22: String() → Convert a value into a string
// ------------------------------------------------------------

let value = 123;

console.log(String(value));
// Output: "123"



 // ------------------------------------------------------------
// COMMAND 23: toString() → Convert a value into a string
// ------------------------------------------------------------

let age = 25;

console.log(age.toString());
// Output: "25"



 // ------------------------------------------------------------
// COMMAND 24: match() → Find and return matching text
// ------------------------------------------------------------

let sentence = "I love JavaScript";

console.log(sentence.match("JavaScript"));
// Output: [ 'JavaScript' ]

console.log(sentence.match("Python"));
// Output: null



// ------------------------------------------------------------
// COMMAND 25: search() → Find the index of a match
// ------------------------------------------------------------

console.log(sentence.search("JavaScript"));
// Output: 7

console.log(sentence.search("Python"));
// Output: -1



// ============================================================
// BONUS DSA COMMAND
// split() + reverse() + join()
// → Reverse a string
// ============================================================

let original = "hello";

let reversed = original.split("").reverse().join("");

console.log(reversed);
// Output: olleh



// ============================================================
// BONUS PATTERN
// Nested Loop + Pair Addition
// → Add every unique pair of numbers
// ============================================================

let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        console.log(numbers[i] + numbers[j]);

    }

}

// Output:
// 6
// 8
// 10
