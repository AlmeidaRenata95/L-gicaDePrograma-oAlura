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
