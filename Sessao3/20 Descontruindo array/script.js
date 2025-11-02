//Descontruir um Objeto

let pessoa ={
    nome: "Geovani",
    sobrenome : "Fanine",
    empresa : "Plustistic",
    cargo : "Desenvolvedor FullStack"
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.empresa);
console.log(pessoa.cargo);
console.log("---------------");

//Desconstrução do Objeto

let nome = "TESTE";
//Se já existe uma variável com o mesmo nome da propriedade do objeto, podemos atribuir um novo nome para a variável que irá receber o valor da propriedade do objeto
const {nome:nomePessoa, sobrenome, empresa, cargo} = pessoa; //Atribuindo o valor da propriedade nome do objeto pessoa para a variável nomePessoa
console.log(nomePessoa);
console.log(sobrenome);
console.log(empresa);
console.log(cargo);

console.log("---------------");
//Desconstrução de um Array
console.log("Desconstrução de um Array");

let nomes = ["Geovani", "Mirella", "Agnessa", "Agnes"];
console.log("Exemplo : Acessando os valores do Array normalmente:");
console.log(nomes[0]);

console.log("Exemplo : Desconstruindo o Array:")
let {0:nome1, 1: nome2, 2: nome3} = nomes; //Desconstrução do Array

console.log(nome1);
console.log(nome2);
console.log(nome3);

console.log("---------------");
console.log("Desconstrução de um Array - Forma Simplificada:");
//Desconstrução de um Array - Forma Simplificada
let [primeiroNome, segundoNome, TerceiroNome] = nomes; //Desconstrução do Array atribuindo os valores para variáveis com o mesmo nome
console.log(primeiroNome);
console.log(segundoNome);
console.log(TerceiroNome);
