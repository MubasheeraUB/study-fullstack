// Event in node js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", (data) => {
    console.log(data.text);
});
emitter.on("logout", (data) => {
    console.log(data.text);
});

emitter.emit("message", { text : "User logged" });
emitter.emit("logout", { text : "User loggout" });