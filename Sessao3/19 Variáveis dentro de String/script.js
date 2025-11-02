//Template strings permite incluir expressões dentro de strings de forma mais fácil e legível.

document.write("Utilizando concatenação tradicional:<br>");
let nome = "Geovani";
let sobreNome = "Fanine";
let idade = 40;

let mensagem = "Meu nome é " + nome + " " + sobreNome + " e eu tenho " + idade + " anos de idade.";

document.write(mensagem + "<br>");

//Utilizando Template Strings
document.write("<br>Utilizando Template Strings:<br>");

let mensagemTemplate = `Meu nome é ${nome} ${sobreNome} e eu tenho ${idade} anos de idade.`;
document.write(mensagemTemplate);