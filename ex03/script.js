let numero = Number(prompt("Digite um número:"));
let tabuada = "";
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    tabuada += `${numero} x ${i} = ${resultado}\n`;
}
alert(tabuada);