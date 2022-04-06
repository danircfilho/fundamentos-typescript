//Função
function saudar(pessoa) {
    console.log('Seja bem vindo ' + pessoa.nome);
}
//Objeto
var pessoa = {
    nome: 'Daniel',
    idade: 46
};
saudar(pessoa); //chamar o método/função
//Tipagem
function saudarComTipagem(pessoaTipada) {
    console.log('Seja bem vindo ' + pessoaTipada.nome + ', sua idade é ' + pessoaTipada.idade + '?');
}
//Objeto
var pessoaTipada = {
    nome: 'Daniel',
    idade: 46
};
saudarComTipagem(pessoaTipada);
