const http = require('http');

var server = http.createServer(function(request, reponse) {
    
    reponse.writeHead(200,{"Content-type": "text/plain"});

    reponse.end("Eai Mano, Bem vindo ao Node!\n");

});

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/");
