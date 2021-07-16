/* Esercizio di oggi: Simon Says
Descrizione:
Un alert() espone 5 numeri generati casualmente. 
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi.
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. */


// VARIABILI 
var cpuNumber = [];                         /*memorizzare i 5 numeri casuali*/                                        
var random = 5;                             /*lunghezza array numeri casuali */
var maxNumbers = 10;                        /* tetto massimo per scegliere*/
var seconds = 5;      /modificare a 30/                /*l'inizio del countdown*/
var display = document.getElementById("countdown");     /* vedere il countdown in pagina*/



// Controlliamo se i numeri non siano già nell'array 
while (cpuNumber.length < random) {
    var cpuRandom = randomNumber (1, maxNumbers); 
    if (!cpuNumber.includes(cpuRandom)) {
        cpuNumber.push(cpuRandom);
    }
}

// Mostriamo all'utente i numeri random del pc
alert(cpuNumber)


// Creiamo un contatore 
var stop = setInterval (myFunction, 1000) 
function myFunction () {
    if (seconds < 0) {
        // fermiamo il contatore quando arriva a 0
        clearInterval(stop) 
        // quando il contatore è a 0, chiediamo i 5 numeri all'utente
        
        
    } else {
        display.innerHTML = seconds;
    }
    seconds --;
}


// FUNZIONI 



// Funzione per calcolare numeri random 
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione per richiamare il prompt 
function getUserNumber () {
    do {
        var userChoice = prompt("Inserisci il primo numero che hai visto")
    } while (isNaN(userChoice) || !userChoice || userChoice < 1 || userChoice > 10);
}

