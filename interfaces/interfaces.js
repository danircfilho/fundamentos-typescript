"use strict";
console.log(Math.pow(3, 3));
console.log(3 ** 3);
let potencia;
potencia = function (base, expoente) {
    return Array(expoente).fill(base).reduce((b, a) => b * a);
};
console.log(potencia(3, 3));
