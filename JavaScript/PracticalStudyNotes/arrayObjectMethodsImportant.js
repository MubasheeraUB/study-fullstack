let employees = [
    { name: "Aisha", age: 22, salary: 25000, department: "IT" },
    { name: "Sara", age: 17, salary: 15000, department: "HR" },
    { name: "Mubasheera", age: 25, salary: 30000, department: "IT" },
    { name: "Anu", age: 28, salary: 28000, department: "Finance" },
    { name: "Fathima", age: 24, salary: 22000, department: "IT" }
];

// 1. Get only IT employees
let itEmployees = employees.filter(
    employee => employee.department === "IT"
);

console.log("IT Employees:", itEmployees);


// 2. Get only their names
let itEmployeeNames = itEmployees.map(
    employee => employee.name
);

console.log("IT Employee Names:", itEmployeeNames);


// 3. Calculate total IT salary
let totalSalary = itEmployees.reduce(
    (sum, employee) => sum + employee.salary,
    0
);

console.log("Total IT Salary:", totalSalary);


// 4. Find the first IT employee earning more than 25000
let highSalaryEmployee = itEmployees.find(
    employee => employee.salary > 25000
);

console.log("First High Salary Employee:", highSalaryEmployee);


// 5. Find the index of the first IT employee earning more than 25000
let highSalaryIndex = itEmployees.findIndex(
    employee => employee.salary > 25000
);

console.log("Index:", highSalaryIndex);


// 6. Check whether at least one IT employee earns more than 30000
let hasHighSalary = itEmployees.some(
    employee => employee.salary > 30000
);

console.log("Has salary > 30000:", hasHighSalary);


// 7. Check whether every IT employee is above 18
let allAdults = itEmployees.every(
    employee => employee.age >= 18
);

console.log("All adults:", allAdults);


// 8. Sort IT employees by salary from highest to lowest
let sortedEmployees = [...itEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Sorted by Salary:", sortedEmployees);

/*
Do I need to SELECT?     → filter()
Do I need to TRANSFORM?  → map()
Do I need ONE element?   → find()
Do I need its POSITION?  → findIndex()
Do I need ONE true?      → some()
Do I need ALL true?      → every()
Do I need ONE final value? → reduce()
Do I need ORDER?         → sort()
*/