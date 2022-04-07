"use strict";
//Tipo implícito
//No typescript o tipo da variável é implícito, uma vez recebido o tipo, mesmo que não declarada não muda
let nome = 'Daniel';
console.log(typeof nome);
let segundonome = 'Daniel';
console.log(typeof segundonome);
//Tipo explícito
//Neste caso o tipo é qualquer um (any), pois foi somente declarada mas não atribuído o seu tipo 
let tipoexplicito;
tipoexplicito = 27;
console.log(typeof tipoexplicito);
tipoexplicito = "Exemplo de Tipo Explícito";
console.log(typeof tipoexplicito);
//Nota: por padrão é recomendado atribuir o seu tipo, abaixo o exemplo
let endereco = 'Daniel';
let idade = 46;
let ireiViajar = true;
console.log(typeof endereco, typeof idade, typeof ireiViajar);
//Array
//Neste caso foi atribuído ao array o tipo 'any', recebe qualquer visualViewport, se fosse atribuído um tipo determinado não apareceria, como no caso abaixo, string e number
let atividades = ['cozinhar', 'viajar', 'nadar'];
console.log(atividades);
atividades = [1, 2, 3];
console.log(atividades);
//Tuplas
//No caso do typescript representa uma quantidade de tipos variados em um array
//No caso abaixo, é um array de tipos variados (any), porém trocar as ordens dos tipos geram erros
let domicilio = ['Rua Principal', 99, 'Bairro Inicial'];
console.log(domicilio);
let domicilioCorreto = ['Rua Principal Legal', 99, 'Bairro Inicial Legal'];
console.log(domicilioCorreto);
//Enums
//Representa um conjunto que define posições em um cenário, exemplo: são atribuídos posições numéricas para segunda, terça...janeiro, fevereiro...
var Cor;
(function (Cor) {
    Cor[Cor["Laranja"] = 0] = "Laranja";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Rosa"] = 10] = "Rosa";
    Cor[Cor["Marrom"] = 11] = "Marrom";
    Cor[Cor["Roxo"] = 100] = "Roxo";
    Cor[Cor["Vermelho"] = 10] = "Vermelho"; //pode receber a mesma numeração de posições anteriores
})(Cor || (Cor = {}));
let minhaCor = Cor.Laranja; //a variavel recebe o tipo Cor que é igual ao valor Cor.Laranja
console.log(minhaCor);
//posições dos enums
console.log(Cor.Roxo);
console.log(Cor.Vermelho);
console.log(Cor.Rosa, Cor.Marrom);
console.log(Cor.Laranja, Cor.Amarelo, Cor.Verde);
//Any
//O any representa uma flexibilidade no tipo das variáveis
let carro = 'Volvo';
console.log(carro);
carro = {
    marca: 'Mercedez',
    ano: 2022
};
console.log(carro);
