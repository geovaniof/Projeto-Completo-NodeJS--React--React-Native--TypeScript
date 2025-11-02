//array functions = map, filter, reduce, forEach

/*
   ( ) => {} 
   1 - Os parênteses, que é por onde a função recebe os argumentos. (assim como em funções tradicionais);
   2 - "Seta" => - responsável por indicar que se trata de uma arrow function;
   3 - Chaves {} - onde fica o corpo da função, ou seja, o que a função irá executar.
*/

function somar(a, b){
    return a + b;
}

document.write(`Resultado da soma 5 + 7 =  ${somar(5, 7)} <br>`);

let subtrair = (a, b) =>{
    let total = a - b;
    document.write(`Resultado da subtração ${a} - ${b} =  ${total} <br>`);
    return total;
}

subtrair(10, 4);

document.write(`<br>Exemplo de array function com MAP <br>`);
let numeros = [1, 2, 3, 4, 5];

numeros.map((item) => {
    document.write(`Número é : ${item} <br>`);

    }
);