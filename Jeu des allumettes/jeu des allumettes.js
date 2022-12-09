//Consigne : https://github.com/adatechschool/Exercices-individuels-Dorothy-Vaugan-Nantes/blob/master/07_jeu_des_allumettes.md

//ETAPE 1 :

let matches= 50;

function removeMatch(){
    var chooseNumber = window.prompt("Entrer un nombre de 0 à 50"); 
    return chooseNumber;
}

//ETAPE 2 :
function keepPlaying(){
    //on initialise leftOverMatches 
    let leftOverMatches=matches

    while (leftOverMatches>0){
    leftOverMatches -=removeMatch()
    console.log(leftOverMatches);
    }
}

keepPlaying()



