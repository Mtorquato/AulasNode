var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"}),
	response.write("<h1> Hello Word!</h1>");
	
//exemplo de como criar um aquivo log pegando as urls que são acessadas
//flags é a opção que voce da ao item escrito 'a' não sobrescreve 'w' sobrescreve
	var txt = arquivo.createWriteStream('./arquivos/logs.txt', {flags: 'a'});
	txt.write(request.url+'\n');


	response.end();
});

//server.listen(3000);

server.listen(3000, function(){
	console.log('Servidor Hello Word rodando!');

});

