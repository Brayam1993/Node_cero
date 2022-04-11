/*
// Se manda a llamar modulo http de node y se guarda en 
//  constante con el mismo nombre
const http = require('http'); 
const colors = require('colors');
// Se llama al modulo http con la funcion createServer
// createServer es un metodo que va a tomar tiempo de creacion
// la funcion tiene un parametro 

const handleServer = function(req, res) { // la funcion tiene dos parametros
    // Se guarda la funcion en una constante llamada handleServer
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Esto es un texto<h1>'); // A quien 
                //  consulte el servidor se le responde
                //  atraves del metodo write 
                //  Se responde <h1> Hola ...   
    res.end();  //  Una vez que a mandado la respuesta   
                //    la respuesta tiene que terminar       
};

const server = http.createServer(handleServer); // Una vez a sido inicializado se ejecuta el 
                 //  metodo listen y se ejecuta en el puerto
                 //  3000   
server.listen(3000, function() {
    console.log('Server on port 3000'.yellow);
});
*/

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola mundo con Express y node</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server on port 3000'. red);
}); 