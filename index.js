const os = require('os'); // llamando modulo os de node

console.log(os.platform()); // Se muestra por consola el metodo platform
console.log(os.release());
console.log('fee mem:',os.freemem(),'bytes');
console.log('Tot mem:',os.totalmem(),'bytes');
