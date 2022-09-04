let matriz = [
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
];



var sumaColum1 = 0,
  sumaColum2 = 0,
  sumaColum3 = 0;
for (let i = 0; i <= 2; i++) {
  sumaColum1 += matriz[i][0];
  sumaColum2 += matriz[i][1];
  sumaColum3 += matriz[i][2];
}

console.log("[ 8  8  8]");
console.log("[ 8  8  8]");
console.log("[ 8  8  8]");
console.log("  " + sumaColum1 + " " + sumaColum2 + " " + sumaColum3);
