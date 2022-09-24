// && "E" : ambas expressões verdadeiras
// || "OU" ; uma expressão verdadeira
// ! "NEGAÇÃO" : 0: Se a expressão valer 1 e 1: se a expressão valer 0
var r,
  x = 5,
  y = 3;
r = !(x > 2);

var r,
  x = 5,
  y = 3;
r = !(x > 7 && x > y);
console.log(r);

var x = prompt("digite um valor inteiro");
if (x % 2 == 0 || x < 0) {
  alert("o valor é par ou negativo");
}
alert("fim do programa");

var x, y = -1;
prompt("digite um valor inteiro: ");
if(x > 0) {
  y = x % 3;
  alert("o resto de 3 é: " x,y);
}

alert("fim do programa")
