/*
Abaixo de 17 -> Muita abaixo do peso
Entre 17 e 18.49 -> Abaixo do peso
Entre 18.5 e 24.99 -> Peso normal
Entre 25 e 29.99 -> Acima do peso
Entre 30 e 34.99 -> Obesidade grau I
Entre 35 e 39.99 -> Obesidade grau II
Acima de 40 -> Obesidade grau III
*/

// IMC = peso/(altura*altura);

var peso;
var altura;
var imc;
var resultado;
var retorno;

function calcularIMC(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    imc = peso / (altura * altura);
    if (imc < 17) {
        resultado = "Muita abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = "Acima do peso";
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = "Obesidade grau II";
    } else {
        resultado = "Obesidade grau III";
    }

    retorno = document.getElementById("resultado");
    retorno.innerHTML = 'Seu I.M.C. é ' + imc.toFixed(2) + ' e você está classificado como: ' + resultado;

    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
}
