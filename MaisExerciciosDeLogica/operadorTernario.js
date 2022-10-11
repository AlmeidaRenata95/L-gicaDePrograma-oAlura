// sem operador ternário
var x = prompt("digite um valor para x");
var y = prompt("digite um valor para y");
var z = prompt("digite um valor para z");

if (x > y) x = z;
else y = 7;

alert("o maior é: " + numeros);

//com operador ternário
var x = prompt("digite um valor para x");
var y = prompt("digite um valor para y");
var z = prompt("digite um valor para z");

z = x > y ? x : y;

alert("o maior é: " + numeros);
