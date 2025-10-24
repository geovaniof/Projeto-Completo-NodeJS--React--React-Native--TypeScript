function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2;
    
    if (media >= 7) {
        console.log("Aprovado com média: " + media);
    } else if (media >= 5) {
        console.log("Aluno reproovado com a média: " + media);
    }
    
    return media;
}

function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem);
}