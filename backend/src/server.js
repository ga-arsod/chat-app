const server = require("./index.js");
const connect = require("./Config/db");

server.listen(5000, async () => {
    try{
        await connect();
        
        console.log("listening to port 5000")
    }
    catch(err) {
        console.log({error : err});
    }
});