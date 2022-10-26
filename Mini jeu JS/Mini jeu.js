function EnterNumber() {
   var EnterNumber = window.prompt("Entrer un nombre");
   return EnterNumber // penser à return pour pouvoir utiliser la valeur en dehors de la fonction
}
let givenNumber = EnterNumber()

console.log(userNumber)

function didIWin(givenNumber){ //le parametre givenNumber ne fait pas référence à la variable givenNumber déclarée précedemment. On aurait pu appeler la variable précédente userNumber par exemple
    let result

    if (givenNumber == 22){
        result = "Bravo ! Vous avez deviné le nombre"
       
    } else if (givenNumber < 22){
        result = "Plus grand!"
        
    } else if (givenNumber > 22){
        result = "Plus petit!"

    }
    alert(result)
}

didIWin(givenNumber) //ici givenNumber fait référence à la variable déclarée ligne 5. Lorsqu'on appelle la fonction elle comprend que le parametre à utiliser c'est celui de la ligne 5 et ça déroule le reste.  