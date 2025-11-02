//Spread Operator -> permite expandir elementos iterativos (como arrays o strings) em locais onde são esperados múltiplos elementos.

let primeiros = [1, 2, 3];
let numeros = [4, 5, 10];

todosNumeros = [...primeiros, ...numeros];


console.log(todosNumeros); // Saída: [1, 2, 3, 4, 5, 10]

console.log("------------------");
console.log("Exemplo com Objetos");

//Exemplo com Objetos
let pessoa = {
    nome: "Geovani",
    idade: 40,
    cargo: "Desenvolvedor"
}

let novaPessoa = {
    ...pessoa,
    status : "Ativo",
    cidade : "Curitiba - PR",
    telefone : "41-99651-3421"
}

console.log(novaPessoa); // Saída: { nome: 'Geovani', idade: 40, cargo: 'Desenvolvedor', status: 'Ativo', cidade: 'Curitiba - PR', telefone: '41-99651-3421' }

//Exemplo com funções

console.log("------------------");
console.log("Exemplo com Funções");

function novoUsuario(info){
    let dados = {
        ...info,
        status : "Ativo",
        inicio : "20/06/2026",
        codigo : "165422"
    };
    
    console.log(dados);

}

novoUsuario({nome: "Geovani", sobrenome: "Fanine", cargo: "Desenvolvedor"});