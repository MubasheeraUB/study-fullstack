/#########################################/
/* is a JavaScript syntax introduced in ES6 that allows you to extract unpack values from arrays (or any iterable) into distinct 
variables using a syntax that mirrors array literals */

const employee = {
    name: "Anu",
    department: "IT",
    skills: ["HTML", "CSS", "JavaScript"]
};

const {
    name: employeeName,
    department = "Unknown",
    skills
} = employee;

console.log(employeeName);
console.log(department);
console.log(skills);
