"use strict";
let nome = 'Daniel';
console.log(typeof nome);
let segundonome = 'Daniel';
console.log(typeof segundonome);
let tipoexplicito;
tipoexplicito = 27;
console.log(typeof tipoexplicito);
tipoexplicito = "Exemplo de Tipo Explícito";
console.log(typeof tipoexplicito);
let endereco = 'Daniel';
let idade = 46;
let ireiViajar = true;
console.log(typeof endereco, typeof idade, typeof ireiViajar);
let atividades = ['cozinhar', 'viajar', 'nadar'];
console.log(atividades);
atividades = [1, 2, 3];
console.log(atividades);
let domicilio = ['Rua Principal', 99, 'Bairro Inicial'];
console.log(domicilio);
let domicilioCorreto = ['Rua Principal Legal', 99, 'Bairro Inicial Legal'];
console.log(domicilioCorreto);
var Cor;
(function (Cor) {
    Cor[Cor["Laranja"] = 0] = "Laranja";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Rosa"] = 10] = "Rosa";
    Cor[Cor["Marrom"] = 11] = "Marrom";
    Cor[Cor["Roxo"] = 100] = "Roxo";
    Cor[Cor["Vermelho"] = 10] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Laranja;
console.log(minhaCor);
console.log(Cor.Roxo);
console.log(Cor.Vermelho);
console.log(Cor.Rosa, Cor.Marrom);
console.log(Cor.Laranja, Cor.Amarelo, Cor.Verde);
let carro = 'Volvo';
console.log(carro);
carro = {
    marca: 'Mercedez',
    ano: 2022
};
console.log(carro);
