//ESERCIZIO 2


// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var dado1 = Math.floor(Math.random() * 6) + 1;
console.log("DADO 1 TOTALIZZA " + dado1 +" PUNTO/I");
var dado2 = Math.floor(Math.random() * 6) + 1;
console.log("DADO 2 TOTALIZZA " + dado2 +" PUNTO/I");



if (dado1 > dado2) {
  document.writeln("Dado1 vince");
}else if (dado2 > dado1) {
  document.writeln("Dado2 vince");
}else {
  document.writeln("Parità");
};
