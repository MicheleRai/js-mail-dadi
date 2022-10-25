// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Player name
let utente = "tu";
let pc = "pc";

// Function to roll the dice
function tira() {
    setTimeout(function () {

        let utente = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".tu").innerHTML = utente;

        let pc = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".pc").innerHTML = pc;
        
        if (utente === pc) {
            document.querySelector("h1").innerHTML = "PAREGGIO!";
        }

        else if (utente < pc) {
            document.querySelector("h1").innerHTML = "HAI PERSO!";
        }

        else {
            document.querySelector("h1").innerHTML = " HAI VINTO";
        }
    }, 250);
}

//solo per stampare in console

// let utente = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
// console.log(utente);

// let pc = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
// console.log(pc);


// if(utente > pc) {
//     console.log('HAI VINTO!');
//     }else if (utente < pc) {
//         console.log('HAI PERSO!');
//         }else {
//             console.log('PAREGGIO!');
//             }
    


