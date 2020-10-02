var http=require("http");
http.createServer(onRequest).listen(8080);  
console.log("Server is up and running");

function onRequest(request,reponse){
    console.log("server - onrequest");
    reponse.writeHead(200,{"Content-Type":"text/plain"});
    reponse.write ("Ciao mondo!");
    reponse.end();
}




var http = require("http");
var myTimerInt;
var mytimerOut;
http.createServer(onRequest).listen(8080);
function onRequest (request,reponse){
    reponse.writeHead(200,{"Content-Type":"text/plain"});
    mytimerOut = setTimeout(function(){
        clearInterval(myTimerInt);
        reponse.end("This is end...");
    },5000);
    myTimerInt = setInterval(function(){
        reponse.write("Ciao Mondo");
    },1000)
}



var fs=require("fs");
var app=require("http").createServer(mainHandler).listen(8080);
console.log(__dirname);

function mainHandler(req,res){
    fs.readFile(__dirname+'/index.html',function(err,content){
        if(err){
            res.writeHead(500);
            return res.end('Error loading file');
        }
        res.writeHead(200);
        res.end(content);
    })
}


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <h1>Titolo della pagina di Test</h1>
    </body>
</html>
