// o comando for perfimite executar repetidamente um conjunto de comandos de acordo com uma condição
// for (inicialização ; condição ; incrmento){
// conjunto de comandos
//} primeeiro ele testa de a condição conforme a variavel declarada é verdadeira, se a condição for verdadeira ele executa o comando e incrementa e volta pro fluxo de validação da condição.

var a = parseInt(prompt("digite um valor para a: "));
var b = parseInt(prompt("digite um valor para b: "));
var c;

for (c = a; c <= b; c++) {
  alert(" o valor de c será: " + c);
}

//cuidado com looping infinito, se na inicialização o valor que a variavel recebe for declarada também na condição teremos uma linha de looping.

var a = parseInt(prompt("digite um valor para a: "));
var b = parseInt(prompt("digite um valor para b: "));
var c;

for (c = a; a <= b; c++) {
  //errado, o valor de a nunca vai mudar, por isso entra no looping
  // looping infinito
  alert(" o valor de c será: " + c);
}

//exemplo looping discremento
var a = parseInt(prompt("digite um valor para a: "));
var b = parseInt(prompt("digite um valor para b: "));
var c;

for (c = a; c <= b; c--) {
  alert(" o valor de c será: " + c);
}

// formato mais dificil
var a = parseInt(prompt("digite um valor para a: "));
var b = parseInt(prompt("digite um valor para b: "));
var c;

for (c = a; c <= b && c > 0; c++) {
  alert(" o valor de c será: " + c);
}

//trabalhando com mais de uma variavel na inicialização
var i, j;
for (i = 0, j = 10; i < j; i++, j--) {
  alert(" o valor de i é: " + i + "o valor de j é: " + j);
}
