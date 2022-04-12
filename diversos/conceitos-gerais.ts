/*
//tipos mais comuns - number, string, boolean
let x: number = 2
let y: string = 'Daniel'
let z: boolean = true

//any: foge a regra principal do typescript poré pode ser usada
let b: any = 0
b = 'Qualquer Coisa',
b = false
b = 123
b = ['a', 12, true]
console.log(b)

//formato de código por inferencia ou anotação
let xpto = 13 //inferencia
let xyz: number = 24 //anotação

//Objetos (array, tuplas)

//array
const meuArray: number[] = [1, 2, 3] 
console.log(meuArray)

//tuplas - modelo de como a lista deve ficar (não aceita outro tipo no lugar)
let minhasTuplas: [string, number, string[]] = ['Daniel', 46, ['Rodrigues', 'Carvalho']] //tuplas
console.log(minhasTuplas)
minhasTuplas = ['João', 23, ['a', 'b']]
console.log(minhasTuplas)

//objeto literal - variavel: {propriedade: valor}
const user: {sexo: string, registro: number} = {
  sexo: 'masculino',
  registro: 123456
}
console.log(user)
console.log(user.sexo)
console.log(user.registro)

//união de tipos (por exemplo um id que pode ter letras e numeros)
let id: string | number = 23
id = 'Daniel'
//irá gerar erro
//id = true
//id = []

console.log(id)

//alias - (por exemplo) forma de chamar uma união de tipos
type meuId = string | number //define o tipo (união de tipos)
let meuId = ['Casa', 100] //exibe o valor da variável
console.log(meuId)

//enum - referenciar os valores de uma propriedade
enum Tamanho {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande',
}

const camisa = {
  tipo: 'Manga Longa',
  size: Tamanho.G
}
console.log(camisa)

//tipo literal - não muda
let teste: 'usuário autenticado' | null; //não muda, mas pode ser nulo
//testar = 'outrovalor' - gera erro! pois não pode mudar o valor da variavel!
teste = 'usuário autenticado';
teste = null; //pode ser nulo, muito usado por exemplo em autenticações

//funções - também precisam ser tipadas
//tipagem de duas propriedades com valores numéricos
function soma(a: number, b: number) {
  return a + b
}
console.log(soma(12, 12))
//console.log(soma('oi', true)) dará erro!

//exemplo para retornar algo tipado
function meuNome(nome: string): string {
  return `Olá, meu nome é ${nome}`
}
console.log(meuNome('Daniel'))
//console.log(meuNome(true)) dará errado! Não será possível retornar outro valor que não seja uma string

//função que não retorna nada - abaixo um exemplo para um log
function logger(msg: string) {
  console.log(msg)
}
//invocar a função
logger("Mensagem exibida!")

//o correto também é tipar a função, no caso com void (não retorna nada), nota a propriedade é string
function loggerVoid(msg: string): void {
  console.log(msg)
}
loggerVoid("Mensagem tipada corretamente e exibida!")

//interfaces
interface parametrosMatematicos {
  n1: number,
  n2: number,
}

//tipado pela interface
function some(numeros: parametrosMatematicos): number {
  return numeros.n1 + numeros.n2
}
console.log(some({n1:10, n2:10}))

function multiplique(numeros: parametrosMatematicos): number {
  return numeros.n1 * numeros.n2
}
console.log(multiplique({n1:10, n2:10}))

//tipar a variavel pela interface
const exemploMultiplique: parametrosMatematicos = {
  n1: 10,
  n2: 5
}
console.log(multiplique(exemploMultiplique))

//narrowing - checagem de tipos através de algoritimos
function informacao(info: number | boolean) {
  //se o o tipo é um numero
  if(typeof info === 'number') {
    console.log(`O número é ${info}`)
    return
  }
  //caso contrário
  console.log('Não foi passado um número!')
}
//invocar a função que mostrará um ou outro
informacao(123)
informacao(true)

//tipos genéricos - tem a finalidade de receber qualquer tipo (porém mais específico do que o any)
function variosArray <T>(arr: T[]) { //le-se uma propriedade (arr:) que receberá arrays de todo tipo (T[])
  arr.forEach((item) => { //forEach exibe o array que recebe os itens do array (item)
    console.log(`Itens Exibidos: ${item}`)
  })
}
//variaveis que representam os arrys
const arr1 = [1,2,3,4]
const arr2 = ['Ola', 'Hey', 'Tudo bem!']

//invocar a função
variosArray(arr1)
variosArray(arr2)

//classes
//propriedade = variável,
//método = função
class Usuario {
  //não usar virgula no final (nome, posicao, aprovado)!
  nome;
  posicao;
  aprovado;

  constructor(nome: string, posicao: string, aprovado: boolean) {
    //não usar virgula no final (nome, posicao, aprovado)!
    this.nome = nome;
    this.posicao = posicao;
    this.aprovado = aprovado;
  }

  //método
  mostrarPessoa() {
    console.log(`O meu nome é ${this.nome}`);
  }
  //argumento
  mostrarPosicao(mostrar: boolean): void {
    if (mostrar) {
      console.log(`Sou um usuario do tipo "${this.posicao}"`);
      return;
    }
    console.log("Informação restrita!!!");
  }
}
//objeto criado aos moldes da clsse Usuario
const novaPessoa = new Usuario("Daniel", "admin", true);
console.log(novaPessoa);
novaPessoa.mostrarPessoa();
novaPessoa.mostrarPosicao(false);
novaPessoa.mostrarPosicao(true);

//Interface - aplicado as classes quando há várias classes muito parecidas, começa com o 'I' maísculo
interface IVeiculo {
  marca: string;
  showMarca(): void;
}

class Carro implements IVeiculo {
  marca;
  rodas;

  constructor(marca: string, rodas: number) {
    this.marca = marca;
    this.rodas = rodas;
  }

  showMarca(): void {
    console.log(`A marca do carro é ${this.marca}`);
  }
}

const gol = new Carro("WV", 4);

gol.showMarca();

//herança
class SuperCarros extends Carro {
  
  motor;

  constructor(marca: string, rodas: number, motor: number) {
    super(marca, rodas);
    this.motor = motor;
  }
}

const cayman = new SuperCarros('Porsche', 4, 4.0)

console.log(cayman)

cayman.showMarca()

*/

//decorators (desmarcar no tsconfig experimentalDecorators) - todo decorator tem uma função que retorna outra função

//constructor decorator - tem a função de mudar algo na prgramação, seja uma função, classe, método...
function ParamBasico() {
  return function <T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      id = Math.random() //função js que gera numero aleatório
      createdAt = new Date() //gera data automaticamente
    }
  }
}

//Para implementar a execução de um decorator usa-se @
@ParamBasico()

//exemplo para testar...
//class Person {
//  id
//  nome
//  createdAt

//  constructor(nome: string, id: number | null, createdAt: string | number) {
//    this.createdAt = createdAt
//    this.id = id
//    this.nome = nome
//  }
//}
//const individuo = new Person ('Daniel', null, "")

class Person {
  nome

  constructor(nome: string) {
    this.nome = nome
  }
}

const individuo = new Person ('Daniel')

console.log(individuo)

