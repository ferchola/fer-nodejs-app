var http = require('http');

var server = http.createServer(function(req, res) {

    /*
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Mr. Consultant! \n\n" 
    	+ "You are visiting us using ----> " + request.headers['user-agent']);

	*/

	//res.writeHead(200, {"Content-Type": "application/json"});
    //res.end(JSON.stringify({ click-me : "https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png" }, null, 3));

	var imgUrl = "<html><body><img title='elliot' src='https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png'/></body></html>"

   	res.writeHead(200, {"Content-Type": "text/html"});
    res.end(imgUrl)

});



var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);