const inquirer = require('inquirer');

const calculadora = require('./modules/calculadora');
const multiplo = require('./modules/multiplo');

//const input = require('./modules/input');

let esDivision = false;
let esMultiplo = false;

inquirer
.prompt([
    {
        type: 'list',
        name: 'operacion',
        message: 'Que operación desea hacer?',
        choices: ['Sumar', 'Restar', 'Multiplicar', 'Dividir', 'Es múltiplo'],
        filter: function(val) {
            esDivision = val === 'Dividir' ? true : false;
            esMultiplo = val === 'Es múltiplo' ? true : false;
            return val === 'Es múltiplo' ? 'multiplo' : val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'num1',
        message: () => {
            if ( esDivision === true ) {
                return 'Ingrese el dividendo.'
            } else if ( esMultiplo ) {
                return '¿ Es múltiplo (valor que ingrese ahora) de (su proximo valor a ingresar) ?'
            } else {
                return 'Ingrese un número'
            }
        },
            
        //'Ingrese un número - (Para divisiónes será el dividendo).',
        validate: function(value) {
          var valid = !isNaN(parseFloat(value));
          return valid || 'Se debe ingresar un número';
        },
        filter: Number
    },
    {
        type: 'input',
        name: 'num2',
        message: () => {
            if ( esDivision === true ) {
                return 'Ingrese el divisor.'
            } else if ( esMultiplo ) {
                return '¿ Es múltiplo (valor que ingresó) de (valor que ingrese ahora) ?'
            } else {
                return 'Ingrese un número'
            }
        },

        //'Ingrese otro número - (Para divisiones será el divisor).',
        validate: function(value) {
            value = parseFloat(value)
            if ( esDivision === true && value === 0 ) { return 'No es posible dividir por 0' }
            return !isNaN( value ) ? true : 'Se debe ingresar un número'
        },
        filter: Number
    }

])
.then(answers => {
    //console.log(answers); // Para verificar - Eliminar 
    console.log(
        '\nRespuesta:',
        answers.operacion === 'multiplo' ? multiplo(answers.num1, answers.num2) : calculadora(answers),
        '\n'
    )
    //console.log('\nRespuesta: ', calculadora(answers) ); //ver como usar 'inquirer' para mostrar resultados.
})
.catch(error => {
    console.log('----------Algo fué mal --------\n', error, '\n-------- Fin mensaje de error -----');
});

// Tarea: Crear modulos para cada funcion sumar, restar, multiplicar y dividir.

//1. Modularizar 
//2. Crear una funcion/modulo que me diga si un numero es multiplo de otro. 
