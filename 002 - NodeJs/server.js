var http = require("http");
http.createServer(OnRequest).listen(8080);
console.log("Server is up and running");

function OnRequest(request, response){
    console.log("Server - onRequest");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Ciao Mondo!");
    response.end();
}