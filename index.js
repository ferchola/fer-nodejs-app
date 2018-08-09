var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hola Nacho puto! Soy un micro servicio escrito en nodejs \n\n" 
    	+ "You are visiting us using ----> " + request.headers['user-agent']);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);