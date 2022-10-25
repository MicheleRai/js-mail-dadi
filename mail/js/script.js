// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



//let mailUtente = prompt('Inserisci la tua mail per verificare l\' accesso');
let mailDatabase = ['michele@gmail.com', 'alessandro@gmail.com', 'mario@gmail.com', 'adolfo@gmail.com', 'alberto@gmail.com', 'giovanni@gmail.com', 'carlo@gmail.com', 'edoardo@gmail.com'];
let mailUtente = document.querySelector("#mail");
let verifica = document.querySelector("#checkbutton");

verifica.addEventListener("click", arraycheck);

function arraycheck () {
  if(mailDatabase.includes(mailUtente.value)){
    alert("Accesso consentito, Bentornato: " + mailUtente.value)
  }
  else{
    alert("Accesso negato! Riprovare o effettuare la registrazione.")
  }
}