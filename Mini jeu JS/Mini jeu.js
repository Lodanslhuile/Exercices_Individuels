//flux d'exécution = fe
function player1(){
    var player1 = window.prompt("Joueur 1 : Entrer un nombre de 0 à 50");
    return player1 
}
let player1Number = player1() // fe-01

function guessNumber() {    //fe-05
   var guessNumber = window.prompt("Joueur 2 : Entrer un nombre de 0 à 50");
   return guessNumber 
}


function didIWin(givenNumber){ //f-07
    let message //f-08
    let result = false //f-09

    if (givenNumber == player1Number){ 
        message = "Bravo ! Vous avez deviné le nombre"
        result = true //f-10 ça s'arrête là si true
    
    } else if (givenNumber < player1Number){
        message = "Plus grand!" //f-11
        
    } else if (givenNumber > player1Number){
        message = "Plus petit!"//f11 bis et retour à l'étape f07 si false
        
    }
    alert(message)

    return result // ce résultat sera assigné en ligne 41 à la variable result2
}


function gameplay(){
    
    let result2 = false //fe-03
    
    do {
        let userNumber = guessNumber() //fe-04
        result2 = didIWin(userNumber) //fe-06 
    }
    while (result2 == false) 

}

gameplay() //fe-02




