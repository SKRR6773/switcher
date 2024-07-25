const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


const { IP, PORT } = process.env;









const main = () => server.listen(PORT, IP, () => {
    return console.log(`Server Listening on port ${PORT}...`);
});




main();
