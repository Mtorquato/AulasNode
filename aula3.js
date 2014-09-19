var arquivo = require('fs');
var path = './arquivos/novo.txt';

arquivo.readFile('./arquivos/clubes.rtf', function (err, data){
	if (err) throw err;
	console.log(data.toString());
});

//verificação se o arquivo criado existe ou nao
arquivo.exists(path, function(resultado){
	if (!resultado) {
		arquivo.writeFile(path, 'Criando arquivo com Nodejs', function(err){
			if(err) throw err;
			console.log('Arquivo criado com sucesso!');

		});
	}else{
		console.log('Arquivo encontra-se criado.');
	}	
})