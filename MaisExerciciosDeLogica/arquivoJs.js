//declarando um variável e atribuindo a ela um tipo/nome
// a variável nome passa a valer o resultado de "Renata"
// var nome = "Renata";

// var idade = 27;
// var nome = prompt("Qual é o seu nome?");
// alert("Olá" + nome + " é um prazer te ver");

// //atribuindo o valor da fruta e mostrando o valor dela.
// var valorMamao = 5.65;
// var nomeFruta = "mamão";
// fruta = valorMamao;
// document.write("O preço da fruta  " + nomeFruta + " está : " + fruta);

//atribuindo o valor da fruta, quantidade e retornando o valor total.
// var valorMamao = 2.59;
// var nomeFruta = "mamão";
// var quantidadeFruta = 10;
// valorTotal = quantidadeFruta * valorMamao;
// document.write("Total a pagar pela fruta " + nomeFruta + " é  " + valorTotal);

//atribuindo o valor da fruta, quantidade de fruta digitada pelo usuário, e retornando o valor total a pagar
// var valorMamao = 2.6;
// var nomeFruta = "mamão";
// var quantidadeFruta = prompt("Digite a quantidade de fruta: ");
// valorTotal = quantidadeFruta * valorMamao;
// //document.write("Total a pagar pela fruta " + nomeFruta + " é " + valorTotal);
// console.log(valorTotal);

// 1. Faça um programa que leia um numero inteiro e o imprima.
// var numero = prompt("Digite um número inteiro: ");
// console.log(numero);
// alert("O número digitado é: " + numero);

// // 2. Faça um programa que leia um numero real e o imprima.
// var numeroReal = prompt("Digite um numero real: ");
// console.log(numeroReal);
// alert("O número digitado é: " + numeroReal);

//3. Peça ao usuario para digitar três valores inteiros e imprima a soma deles.

// var numero1 = parseInt(prompt("Digite o primero número: "));
// var numero2 = parseInt(prompt("Digite o segundo número "));
// var numero3 = parseInt(prompt("Digite o terceiro número "));
// soma = numero1 + numero2 + numero3;

// document.write(" a soma dos numeros digitados é: " + soma);

// 4. Leia um numero real e imprima o resultado do quadrado desse núumero.
// var numeroReal = 6.4;
// total = numeroReal * numeroReal;
// console.log(total);

// 5. Leia um numero real e imprima a quinta parte deste núumero
// var numeroReal = 6.4;
// total = numeroReal / 5;
// console.log(total);

// var celsius = parseInt(prompt("Temperatura em graus celcius: "));
// var f = (9 * celsius) / 5 + 32;
// document.write("o valor convertido em Fah é: " + f);

// var fh = parseInt(prompt("Temperatura em graus Fahrenheit: "));
//     celsius = (5 ∗ fh) − 32/9;
//     document.write("o valor convertido em fahrenheit é: " + celsius);

var kelvin = parseFloat(prompt("Temperatura em graus kelvin "));
celsius = kelvin - 273.15;

document.write("o valor convertido em graus kelvi é: " + celsius);
