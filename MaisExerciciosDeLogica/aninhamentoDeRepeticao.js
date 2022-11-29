var i, j;
i = 1;
while (i < 5) {
  for (j = 1; j < 5; j++) {
    if (i == j) console.log("1 ");
    else console.log(" 0 ");
  }
  alert("o valor é: " + i);
  i++;
}
