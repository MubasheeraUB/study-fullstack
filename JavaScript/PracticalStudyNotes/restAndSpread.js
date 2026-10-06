/#########################################/
/* Rest = gather 📦
Spread = unpack 📤 
 */

const user = {
    name: "Anu",
    age: 25
};

const updatedUser = {
    ...user,
    age: 26,
    role: "Developer"
};

const { name, role } = updatedUser;

console.log(name);console.log("Hello, World!");
