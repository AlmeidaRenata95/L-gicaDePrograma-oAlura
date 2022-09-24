var x = prompt("Digite um número ", x);
if (x % 2 == 0) {
  alert("o valor é par");
} else {
  alert("o valor é ímpar");
}
alert("Fim do programa");

var idade = prompt("Digite sua idade", idade);
if (idade >= 18) {
  alert("Oba, você pode tirar a CNH");
} else {
  alert("poxa, você é menor de idade!");
}
alert("Fim do programa");

var idade = prompt("Digite sua idade", idade);
if (idade >= 18) {
  alert("Oba, você pode tirar a CNH");
} else (x%2 == 1){ // errado, não colocar um comando dentro do else, pq ele já é o oposto do if.
  alert("poxa, você é menor de idade!");
}
alert("Fim do programa");


s