const Math = {}; // Objeto

function add(x1, x2) {  // Cada propiedad del objeto es una funcion
    return x1+ x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1*x2;
}

function divide(x1, x2) {
    if(x1 === 0 || x2 === 0 ) {
        console.log('no se puede dividir por cero 0')
    }else{
        return x1/x2;
    }
}

function hello(name) { // Funcion hello toma un parametro name
    console.log('Hola', name);
}


// export add = add; -- Exporta la propiedad de un objeto

Math.add = add;         // Propiedades del objeto
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
Math.hello = hello;

module.exports = Math;  // Exporta un objeto Math


//module.exports = hello;