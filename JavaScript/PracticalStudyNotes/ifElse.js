const age = 25;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 21) {
    console.log("Can drink");
} else {
    console.log("Minor");
}

/#########################################/

const age1 = 20;
const hasID = false;

if (age1 >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Underage");
}