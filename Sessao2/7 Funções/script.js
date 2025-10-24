var area = document.getElementById("area");

function entrar() {
    var nome = prompt("Qual o seu nome?");
    if(nome === "" || nome === null){
        alert("Algo deu errado!");
        area.innerHTML = "Clique no botão para acessar";
    }
    else
    {
        area.innerHTML = "Bem vindo " + nome + " ";
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        area.appendChild(botaoSair);

    }
}

function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu da conta";
}

