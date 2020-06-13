    //  datosIngresados es un objeto literal que cuenta con
    //   propiedades 'datosIngresados.num1', 'datosIngresados.num2' 
    //   y un metodo 'datosIngresados.operacion()' para resolver con las dos propiedades (num1, num2) respectivamente.

let suma = require('./suma');
let resta = require('./resta');
let multiplica = require('./multiplica');
let divide = require('./divide');

module.exports = datosIngresados => {
    switch(datosIngresados.operacion){
        case 'sumar': return suma(datosIngresados.num1, datosIngresados.num2)
        case 'restar': return resta(datosIngresados.num1, datosIngresados.num2)
        case 'multiplicar': return multiplica(datosIngresados.num1, datosIngresados.num2)
        case 'dividir': return divide(datosIngresados.num1, datosIngresados.num2)
        default: return 'Algo salió mal' // Se podría usar Throw? como se usa?
    };
}