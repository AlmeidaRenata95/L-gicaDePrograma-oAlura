// aninhamento de if else
var x = prompt("Digite um numero ", x);
if (x == 0) {
  alert(" o numero é igual a 0");
} else {
  if (x > 0) alert("o valor é maior que 0");
  else alert("o valor é menor do que 0");
}

var x = prompt("Digite um número", x);
if (x == 18) {
  alert("o numero é igual a 18");
} else {
  if (x > 18) alert("o numero digitado é maior que 18");
  else alert("o numero é menor que 18");
}
alert("fim do programa");

// cuidado com as chaves, o ELSE sempre obdecerá o último IF, então ao colocarmos as chaves ele obdecerá o primeiro IF, mas isso tem que fazer sentido em todo o código.
var num = prompt("Digite um numero", num);
if (num >= 0) {
  if (num == 0) {
    alert("o numero é igual a zero");
  }
} else {
  alert("o numero é menor que 0");
}
// não podemos usar 2 elses, mas podemos usar 2 ifs, cada if tem 1 else.
