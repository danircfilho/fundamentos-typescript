"use strict";
//Demonstrando um jeito de calcular potencia de 3 elevado a 3 como exemplo respeitando a interface
console.log(Math.pow(3, 3)); //Math.pow
console.log(3 ** 3); //Método novo
//Calcular uma função
//A variavel potencia recebe a funcaoCalculo como tipo
let potencia;
//Potencia recebe então os dados da função com os atributos que respeitam a interface
potencia = function (base, expoente) {
    return Array(expoente).fill(base).reduce((b, a) => b * a);
};
console.log(potencia(3, 3)); //Exemplo de se utilizar a funçao tendopor base uma interface
