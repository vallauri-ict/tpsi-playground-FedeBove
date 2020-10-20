var http = require("http");
var myTimerInt;
var myTimerOut;
http.createServer(onRequest).listen(8080);

function onRequest(request, reponse){
    reponse.writeHead(200, {"Content-Type":"text/plain"});
    myTimerOut = setTimeout(function(){
        clearInterval(myTimerInt);
        response.end("This is the end...");
    }, 5000);
    myTimerInt = setInterval(function(){
        reponse.write("Ciao Mondo");
    }, 1000);
}