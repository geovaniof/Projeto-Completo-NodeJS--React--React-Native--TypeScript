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