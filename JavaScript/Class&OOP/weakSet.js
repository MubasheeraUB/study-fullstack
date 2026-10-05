let visitedUsers = new WeakSet();

let user1 = { name: "Mubasheera" };
let user2 = { name: "Aisha" };

visitedUsers.add(user1);
visitedUsers.add(user2);

console.log(visitedUsers.has(user1));

let anotherUser = user1;

user1 = null;

console.log(visitedUsers.has(anotherUser));