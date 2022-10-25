// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let utente = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(utente);

let pc = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(pc);

if(utente > pc) {
    console.log('HAI VINTO!');
    }else if (utente < pc) {
        console.log('HAI PERSO!');
        }else {
            console.log('PAREGGIO!');
            }
    


