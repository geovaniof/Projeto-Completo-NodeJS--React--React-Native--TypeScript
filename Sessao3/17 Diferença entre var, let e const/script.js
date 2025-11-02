//Diferença entre VAR, LET e CONST

// VAR
document.write("VAR <br>");
var nome = 'Geovani';
if (nome === 'Geovani'){
    var curso = "Programador Back-end";
    document.write(curso);
}

document.write("<br>" + curso); // VAR tem escopo global e de função, logo, é acessível fora do bloco if

document.write("<br><br> LET <br>");

// LET
var nome = 'Mirella';
if (nome === 'Mirella'){
    let materia = "Programador Front-end";
    document.write(curso);
}

//Gerar um erro ao tentar acessar a variável 'materia' fora do bloco if
//document.write("<br>" + materia);  // LET tem escopo de bloco, logo, não é acessível fora do bloco if


//CONST -> Constante é uma variável que não pode ter seu valor alterado após a atribuição inicial
document.write("<br><br> CONST <br>");
const CARGO = "Desenvolvedor Full Stack";
document.write(CARGO);
