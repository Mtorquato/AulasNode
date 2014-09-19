var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	

	if (request.url == '/') {
		response.write("<h1> Pagina principal</h1>");
	}
	else if(request.url == '/contato') {
		response.write("<h1> Pagina de contato</h1>");
	}
	else if(request.url == '/clientes') {
		response.write("<h1> Pagina de clientes</h1>");
	}
	else{
		response.write("<h1> Pagina nao encontrada</h1>");
	}

	response.end();
});

//server.listen(3000);

server.listen(3000, function(){
	console.log('Aula 2 - Servidor está rodando!');

});