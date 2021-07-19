/* Esercizio di oggi: Simon Says
Descrizione:
Un alert() espone 5 numeri generati casualmente. 
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi.
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. */


// Variabili
var cpuNumber = []; 
var maxNumbers = 50;


// Controlliamo se i numeri non siano già nell'array 
while (cpuNumber.length < 5) {
    var cpuRandom = randomNumber (1, maxNumbers); 
    if (!cpuNumber.includes(cpuRandom)) {
        cpuNumber.push(cpuRandom);
    }
}

// Mostriamo all'utente i numeri random del pc
alert(cpuNumber)


// Chiediamo dopo tot secondi i numeri all'utente 
// controlliamo che l'utente non abbia inserito due volte lo stesso numero 
// controlliamo che la scelta dell'utente combaci con i numeri random 

setTimeout (function () {
    var userGuess =  [];               /*array tentativi dell'utente */
    var userNumbers = [];              /*array numeri indovinati*/
    while  (userGuess.length < 5) {
        var userChoice = getUserNumber();  /*funzione per chiedere i numeri all'utente */
        if (!userGuess.includes(userChoice)) {
            userGuess.push(userChoice)
            if(cpuNumber.includes(userChoice)) {
                userNumbers.push(userChoice);
            }
        } else {
            alert("Hai già scelto 'sto numero!")
        }
    }
    
    // Facciamo uscire un messaggio diverso a seconda dei numeri indovinati 
    var message = "complimenti, hai indovinato "
    if (userNumbers.length === 0) {
        alert("Complimenti, hai le stesse capacità mnemoniche di Dory!");
    } else if (userNumbers.length === 1) {
        alert(message + userNumbers.length + " numero: " + userNumbers);
    } else {
        alert(message + userNumbers.length + " numeri: "  + userNumbers);
    }
    
}, 1000);



// FUNZIONI 

// Funzione per calcolare numeri random 
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione per richiamare il prompt e dare una validazione
function getUserNumber () {
    var num = prompt("Inserisci i numeri che hai visto")
    while (isNaN(num) || !num || num < 1 || num > 50 || num.trim === " ") {
        alert("Non hai inserito un numero valido!")
        num = prompt("Inserisci i numeri che hai visto")
    }

    return parseInt(num)
}





