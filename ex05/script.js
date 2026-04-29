let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

let mensagem = "";

for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) {
        mensagem += i + " ";
    }
}
alert(mensagem);