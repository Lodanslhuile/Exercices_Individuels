function EnterNumber() {
   var EnterNumber = window.prompt("Entrer un nombre");
   return EnterNumber // penser à return pour pouvoir utiliser la valeur en dehors de la fonction
}


function didIWin(givenNumber){ 
    let message
    let result = false // on définit une variable false par défaut pour pouvoir l'utiliser plus tard.

    if (givenNumber == 22){
        message = "Bravo ! Vous avez deviné le nombre"
        result = true // ici on explique que dans ce cas le resultat est true vs les autres resultats qui sont false.
    
    } else if (givenNumber < 22){
        message = "Plus grand!"
        
    } else if (givenNumber > 22){
        message = "Plus petit!"
        
    }
    alert(message)

    return result // on fait un return pour pouvoir récupérer le resultat et l'utiliser en dehors de la fonction.
}

function gameplay(){
   
    let result2 = false // on définit une nouvelle variable qui sera utilisée pour assigner pus tard le resultat true/false de la fonction didIwin.
    
    do {
        let userNumber = EnterNumber()
        result2 = didIWin (userNumber) // attention à ne pas écrire "let results2" sinon ne comprend pas qu'il s'agit de la variable déclarée ligne 29. 
    }
    while (result2 == false) // refaire la boucle tant que le résultat est false.

}

gameplay()




