var http = require('http');

var server = http.createServer(function(req, res) {

    /*
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Mr. Consultant! \n\n" 
    	+ "You are visiting us using ----> " + request.headers['user-agent']);

	*/

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({ a: 1 }, null, 3));

});

//https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);