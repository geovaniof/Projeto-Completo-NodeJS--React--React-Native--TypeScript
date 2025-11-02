//setInterval

/*
function acao() {
    document.write("Executando... <br/>");
}

setInterval(acao, 1000);
*/

//Utilizando função anônima
/*
var timer = setInterval(() => {
    document.write("Executando... <br/>");
}, 1000);
*/
//Para parar o setInterval, utilize clearInterval passando o ID do timer
//Exemplo: clearInterval(timer);

//timeOut -> Executa depois de algum tempo

/*
function acao() {
    document.write("Executando... <br/>");
}

setTimeout(acao, 3000);
*/

//Utilizando função anônima
setTimeout(() => {
    console.log("EXECUTO NOSSO TIMEOU!")
} , 3000);

