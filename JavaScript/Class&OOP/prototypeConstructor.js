function User(name) {
    this.name = name ;
}

User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
}

let user1 = new User("Mubasheera") ;

console.log(Object.getPrototypeOf(user1) === User.prototype);
console.log(User.prototype.constructor === User);