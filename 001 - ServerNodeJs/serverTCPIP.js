var server = require("net");
server.createServer(onRequest).listen(8080);
console.log("Server is up and ranning");

function onRequest(socket){
    socket.write("Hello World!");
    socket.on('data', function(data){
        socket.write('echo: ' + data + ' b ');
    });
}