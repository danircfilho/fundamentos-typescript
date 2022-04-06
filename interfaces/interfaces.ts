//Objeto
const pessoa = {
  nome: 'Daniel',
  idade: 46
}

interface Humano {
  nome: string,
  idade: number
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
//chamar os métodos/funções que estão acima
saudar(pessoa)
mudarNome(pessoa)
saudarComTipagem(pessoa)
saudarComTipagemInterface(pessoa)