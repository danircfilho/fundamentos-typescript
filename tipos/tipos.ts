/* Tipo implícito */
/* No typescript o tipo da variável é implícito, uma vez recebido o tipo, mesmo que não declarada não muda */
let nome = 'Daniel'
console.log(typeof nome)

let segundonome: string = 'Daniel'
console.log(typeof segundonome)

/* Tipo explícito */
/* Neste caso o tipo é qualquer um (any), pois foi somente declarada mas não atribuído o seu tipo */
let tipoexplicito
tipoexplicito = 27
console.log(typeof tipoexplicito)
tipoexplicito = "Exemplo de Tipo Explícito"
console.log(typeof tipoexplicito)

/* Nota: por padrão é recomendado atribuir o seu tipo, abaixo o exemplo */
let endereco: string = 'Daniel'
let idade: number = 46
let ireiViajar: boolean = true
console.log(typeof endereco, typeof idade, typeof ireiViajar)



