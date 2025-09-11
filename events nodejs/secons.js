const eventEmitter = require("events");

class chat extends EventEmitter{

    sendMessage(message){
        console.log(`message ${message}`);
        this.emit("message", message);
}}

const chat = new chat();

chat.on("message", (message) => {
    console.log(`message ${message}`);
});

chat.sendMessage("Hello");
   