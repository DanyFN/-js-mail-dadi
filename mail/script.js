// ESERCIZIO 1

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// // METODO 1

// Creo un array che contiene le email che possono accedere
var email = ["daniele@hotmail.it" , "simone@hotmail.it" , "alessia@hotmail.it"];

// Chiedo un'email all'utente tramite un prompt
var emailUtente = prompt("Inserisci la tua email","scrivi qui...");

// trasformo tutto in minuscolo per verificare per evitare differenze tra maiuscole e minuscole
var emailUtenteLower = emailUtente.toLowerCase();

// inizializzo una variabile  per la verifica
var trovato = false;



for (var i = 0; i < email.length; i++) {

  if (email[i] == emailUtenteLower) {
    trovato = true;
  }
};


if (trovato) {
  document.writeln("La Tua e-mail è corretta")
}else{
  document.writeln("La Tua e-mail è sbagliata")
  alert("ATTENZIONE la tua email è sbagliata")
};

 // METODO 2

// var email = ["daniele@hotmail.it" , "simone@hotmail.it" , "alessia@hotmail.it"];
// var emailUtente = prompt("Inserisci l'email","scrivi qui...");
// var emailUtenteLower = emailUtente.toLowerCase();
//
// for (var i = 0; i < email.length; i++) {
//     if (emailUtenteLower === email[i]) {
//     document.writeln("La Tua e-mail è corretta");
//     break; //IMPORTANTE
//   }else {
//     document.writeln("ATTENZIONE la tua email è sbagliata");
//     break;
//   }
// };
