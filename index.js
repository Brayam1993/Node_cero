// 1. Se require modulo file sistem
// 2. Se guarda en constante con el mismo nombre del modulo
// 2.1 dos metodos principales del modulo se usa 
//     para poder crear archivos nuevos y poder leerlos

const fs = require('fs'); 

//  Se empieza creando un nuevo archivo
//  Desde -*-modulo-*- fs se llama al metodo writefile
//  El -*-metodo-*- write file es para poder escribir un archivo
//  El metodo write file recibe el -*-parametro-*- nombre del 
//      archivo que se llama texto.tx y recibe la direccion de 
//      donde se quiere crear. 
//      Como se crea en el mismo proyecto se coloca ./
//  Como segundo parametro se pasa el contenido.
//  Recibe un parametro mas, un callback -*-* Funcion 
//      que se ejecuta cuando ha terminado el proceso anterior
//  La funcion recibe el parametro err
//  Si el error existe se manda por consola un mesaje mostrando
//      el error
//  Si no, se manda por consola un mensaje "Archivo creado"
/*
fs.writeFile('./texto.txt','linea uno',function(err){
    if(err) {
        console.log(err);
    }
    console.log('Archivo creado');
});
*/
//  La funcion se conoce como callback
//  El codigo se conoce como codigo asincrono  

// const result = fs.writefile('', ''); // Codigo bloqueante

// console.log('ultima linea de codigo');

fs.readFile('./texto.txt', function (err, data){
    if (err){                     //  
        console.log(err);
    };
    console.log(data.toString()); // toString es un metodo de JS para comvertir datos a string
});
