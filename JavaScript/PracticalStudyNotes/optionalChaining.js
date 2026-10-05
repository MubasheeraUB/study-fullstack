/#########################################/
/* Optional Chaining (?.) safely accesses a property when something in the chain might be null or undefined. */

const company = {
    employee: {
        profile: {
            name: "Mubasheera"
        }
    }
};

console.log(company.employee?.profile?.name);
console.log(company.employee?.salary?.amount);
console.log(company.department?.manager?.name);
