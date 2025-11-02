
//Rest Operator -> Funciona para agrupar os valores em um array

function convidados(...nomes){
    console.log("SEJAM TODOS BEM VINDOS TODOS OS CONVIDADOS:");
    console.log(nomes);

}

convidados("Geovani", "Natalia", "Melissa", "Iuliana");

console.log("--------------------------------------------------");
console.log("Gerador de números");

function geradorNumeros( ...numeros ){
    console.log(numeros);
    const numeroGerado = Math.floor( Math.random() * (numeros.length) );
    console.log("Número sorteado : " + numeros[numeroGerado]); 
}

geradorNumeros(1,2,3,4,5,6,7,8,9,10);