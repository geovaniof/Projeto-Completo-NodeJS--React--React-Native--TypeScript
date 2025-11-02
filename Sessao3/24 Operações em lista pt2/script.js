// MAP = Percorrer todo um array

document.write("Usando o MAP para percorrer um array:<br/>");
let lista = ["Geovani", "Melissa", "Mariana", "Giusepe"];

lista.map((item, index) => {
    document.write(`<br/>Item : ${item} está no índice ${index}`);
})

//Reduce = Busca reduzir um array
document.write("<br/><br/>Usando o REDUCE para somar valores de um array:<br/>");
let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) =>{
    document.write(`<br/>Total até o momento: ${acumulador}`);
    document.write(`<br/>Número atual: ${numero}`);
    document.write(`<br/>Índice atual: ${indice}`);
    document.write(`<br/>Array original: ${original}<br/>`);
    document.write("--------------");
    return acumulador += numero;
})

document.write(`<br/>O total da soma é: ${total}`);

//FIND = Encontrar um valor específico em um array
document.write("<br/><br/>Usando o FIND para encontrar um valor específico em um array:<br/>");

let listagem = [5, 3, "Jose", 2, "Geovani", "Joese"];

let busca = listagem.find((item) => {
    return item === "Jose";
    }
)

document.write(`<br/>O valor encontrado foi: ${busca}`);
//Caso não encontre o valor, o retorno será undefined

//Filter = Filtrar valores de um array
document.write("<br/><br/>Usando o FILTER para filtrar valores de um array:<br/>");

let palavras = ["Geovani", "Ana", "Jose", "Ricardo", "Malvina", "Jose"];

let resultado = palavras.filter((item) =>{
    return item.length <= 4;
    }
)
//Retornará um novo array com os valores filtrados, isto é, valores com até 4 caracteres
document.write(`<br/>Os valores filtrados são: ${resultado}`);
