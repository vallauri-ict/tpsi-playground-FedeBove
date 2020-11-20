var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(appListener);
server.listen(8080);
console.log('Server is up and running');

function appListener(req, res){
    var resource=(url.parse(req.url)).pathname;
    console.log('Risorsa --> '+resource);
    switch(resource){
        case '/':

        break;
        case '/index.html':
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("<html><head><title>Es1 Server</title>");
            res.write("<link rel='stylesheet' href='css/index.css' /><link rel='stylesheet' href='css/bootstrap.css' />");
            res.write("<script src='js/jquery.js'></script><script src='js/index.js'></script></head>");
            res.write("<body>Questo è un server web Node");
            res.write("<h1>Testo scritto tramite l'utilizzo di una function esterna alla createServer</h1>");
            res.write("<p id='par'>Paragrafo di testo formattato tramite css</p>");
            res.write("<form action='/p2' method='post'><input type='submit' value='Redirect to Pag 2' class='btn btn-primary' /></form>");
            res.write("<input type='button' value='Vai a P3' class='btn btn-danger' id='btnP3' />");
            res.end("</body></html>");  
        break;
        case '/css/index.css':
            res.writeHead(200,{'Content':'text/css;charset=UTF-8'});
            res.end(fs.readFileSync('css/index.css'));
        break;
        case '/css/bootstrap.css':
            res.writeHead(200,{'Content':'text/css;charset=UTF-8'});
            res.end(fs.readFileSync('css/bootstrap.css'));
        break;
        case '/js/jquery.js':
            res.writeHead(200,{'Content':'text/javascript;charset=UTF-8'});
            res.end(fs.readFileSync('js/jquery.js'));
        break;
        case '/js/index.js':
            res.writeHead(200,{'Content':'text/javascript;charset=UTF-8'});
            res.end(fs.readFileSync('js/index.js'));
        break;
        case '/p2':
            fs.readFile('./pag2.html', 'utf8', function(err, content){
                if(!err){
                    var header={'Content-Type':"text/html;charset=utf-8"};
                    res.writeHead(200, header);
                    res.write(content);
                    res.end("<a href='/' class='btn btn-danger'>Torna alla Home</a>");
                }                
                else{
                    pageNotFound(res);
                };
            });    
        break;
    }
}