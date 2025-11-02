// includes, statsWith, endsWith

//includes é case sensitive
document.write("Testando includes <br/>");
let nomes = ["Geovani", "Mariana", "Mirella"];

document.write(`Mariana está na lista ? ${nomes.includes("Mariana")} `);

if (nomes.includes("Geovani")) {
    document.write("<br/>O nome Geovani está na lista");
} else {
    document.write("<br/>O nome Geovani não está na lista");
}

document.write("<br/><br/>");
//startsWith é case sensitive
document.write("Testando startsWith <br/>");
let nome = "Geovani Fanine";
document.write(`O nome começa com Geo ? ${nome.startsWith("Geo")} <br/>`);

//EndsWith verifica o final da string
//endsWith é case sensitive
document.write("<br/>Testando endsWith <br/>");
document.write(`O nome termina com nine ? ${nome.endsWith("nine")} <br/>`);