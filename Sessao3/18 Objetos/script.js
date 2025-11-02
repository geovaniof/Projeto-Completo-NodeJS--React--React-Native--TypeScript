//Objetos

///Listas

document.write('Listas<br>');
let lista = [123, 4, 'Geovani'];
document.write(lista + '<br>');

//Objeto

document.write('<br>Objeto<br>');

let pessoa ={
    nome : "Geovani",
    idade : 40,
    altura : 1.85,
    cargo : "Analista de Sistemas"
}


document.write(pessoa.nome + '<br>'); //Acessando o atributo nome do objeto pessoa

document.write('<br>Carro<br>');

let carro = {
    nome : "Mustang",
    cor : "Vermelho",
    potencia : 450
}


document.write(carro.nome + '<br>'); //Acessando o atributo nome do objeto carro}
document.write(carro.cor + '<br>'); //Acessando o atributo cor do objeto carro
document.write(carro.potencia + '<br>'); //Acessando o atributo potencia do objeto carro

document.write('<br>Usuário<br>');

let usuarios = [
    {nome : "Mirella", cargo : "Desenvolvedora", status: "Ativo"},
    {nome : "Geovanii", cargo : "Analista", status: "Ativo"},
    {nome : "Ana", cargo : "Gerente", status: "Ativo"}
];

console.log(usuarios);

///Console
/// console[0].nome -> Mirella