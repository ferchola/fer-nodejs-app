var http = require('http');

var server = http.createServer(function(req, res) {

    /*
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Mr. Consultant! \n\n" 
    	+ "You are visiting us using ----> " + request.headers['user-agent']);

	*/

	//res.writeHead(200, {"Content-Type": "application/json"});
    //res.end(JSON.stringify({ click-me : "https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png" }, null, 3));

	//var imgUrl = "<html><body><img title='elliot' src='https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png'/></body></html>"

    var html = "<html lang='en' xmlns='http://www.w3.org/1999/xhtml'><head><meta charset='utf-8' /><title></title></head><body><iframe src='https://webchat.botframework.com/embed/ferchola?s=GEn4FGHlR-s.cwA.6XI.foiiMJbTBoFW7Dahva0bWX2gPqw3KOGwbUTsCNzWmwA' width='400' height='550'></iframe></body></html>";

   	res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);

});



var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);