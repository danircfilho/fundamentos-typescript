/*
//Objeto
const pessoa = {
  nome: 'Daniel',
  idade: 46,
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome +' ' + sobrenome)
  }
}

//Nota: caso haja atributos declarados no objeto é obrigatório o seu uso, para não usar deve ser atribuído o conceito opcional (?)
interface Humano {
  nome: string,
  idade?: number //o atributo é opcional, pode ou não estar inserido dentro do objeto
  [prop: string]: any //um terceiro atributo declarado sem nome e tipo definidos (fica livre para escolher)
  saudar?(sobrenome: string): void //void: significa que não retorna nada (realmente aqui, a função não retorna nada)
}

//Função
function saudar(pessoa: any) {
  console.log('Seja bem vindo ' + pessoa.nome)
}

//Função Mudar o Nome
function mudarNome(pessoa: any) {
  pessoa.nome = 'Silvana'
  console.log('Olá ' + pessoa.nome +'!')
}

//Função com Tipagem
function saudarComTipagem(pessoa: {nome: string, idade: number}) {
  console.log('Seja bem vindo ' + pessoa.nome +', sua idade é ' + pessoa.idade + '?')
}

//Função com Tipagem com o uso da Interface (Humano)
function saudarComTipagemInterface(pessoa: Humano) {
  console.log('Seja bem vindo ' + pessoa.nome +', sua idade é ' + pessoa.idade + '?')
}

//Função com Tipagem com o uso da Interface (Humano)
function interfaceHumano(pessoa: Humano) {
  console.log('Meu nome é ' + pessoa.nome +', tenho ' + pessoa.idade + ' de idade e altura de ' + pessoa.altura)
}


//chamar os métodos/funções que estão acima
saudar(pessoa)
mudarNome(pessoa)
saudarComTipagem(pessoa)
saudarComTipagemInterface(pessoa)
interfaceHumano({nome: "Pedro", idade: 46, altura: 1.84}) //interface (Humano) com idade opcional e atributo any
pessoa.saudar('de Oliveira') //dentro do objeto pessoa, inserido o atributo 'sobrenome' passado como propriedade (de Oliveira)

//Usando Classes
//A classe Cliente implementa a interface Humano, neste caso a classe tem que repsitar os atributos da interface
class Cliente implements Humano {
  nome: string = ""
  idade?: number | undefined 
  ultimaCompra: Date = new Date()
  }

//Construtor padrão
const meuCliente = new Cliente()
meuCliente.nome = 'Davi'
meuCliente.idade = 5

console.log('Meu nome é ' + meuCliente.nome + ' e tenho ' + meuCliente.idade + ' anos!')
console.log('Fiz a última compra em: ' + meuCliente.ultimaCompra)

//Interface Função - Deve-se respeitar a interface e a tipagem
//Nesta interface cria dois atributos do tipo number (a, b): que resultam em number */
interface CalculoPotencia {
  (a: number, b: number): number
}
//Demonstrando um jeito de calcular potencia de 3 elevado a 3 como exemplo respeitando a interface
console.log(Math.pow(3,3)) //Math.pow
console.log(3 ** 3) //Método novo

//Calcular uma função
//A variavel potencia recebe a funcaoCalculo como tipo
let potencia: CalculoPotencia

//Potencia recebe então os dados da função com os atributos que respeitam a interface
potencia = function(base: number, expoente: number): number {
  return Array(expoente).fill(base).reduce((b, a) => b * a)
}
console.log(potencia(3,3)) //Exemplo de se utilizar a funçao tendopor base uma interface


