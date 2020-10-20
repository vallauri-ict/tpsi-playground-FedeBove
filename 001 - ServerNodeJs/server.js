var http = require("http");
http.createServer(onRequest).listen(8080);
console.log("Server is up and running");

function onRequest(request, reponse){
    console.log("Server - onRequest");
    reponse.writeHead(200, {"Content-Type":"text/plain"});
    reponse.write("Ciao Mondo!");
    reponse.end();
}