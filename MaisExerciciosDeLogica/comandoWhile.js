var x = prompt("digite um valor para x: ");
var z = prompt("digite um valor para z");

while (x < z) {
  x++;
}
alert("x agora vale: " + x);

var a = prompt("digite um numero");
var b = prompt("digite um numero");

while (a < b) {
  a++;
}
alert("a", a);

//comando while repetindo uma condição até determinado valor digitado
var a = prompt("Digite um valor: ");
var b = prompt("Digite outro valor");

while (a < b && a > 0) {
  a++;
  alert("o valor será: " + a);
}

var numeros = prompt("digite um numero de 0 a 10");
while (numeros < 10) {
  numeros++;
}

var a = prompt("digite um valor para a:");
var b = prompt("digite um valor para b:");

while (a < b || a > 0) {
  a++;
  alert("o valor será: " + a);
}
