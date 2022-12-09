//Consigne : https://github.com/adatechschool/Exercices-individuels-Dorothy-Vaugan-Nantes/blob/master/07_jeu_des_allumettes.md

//ETAPE 1 et ETAPE 3:

let matches= 50;

function removeMatch(){
    var chooseNumber = window.prompt("Entrer un nombre de 1 à 6"); 

    /*pour l'étape 3 rajout de condition pour que le nombre d'allumettes enlevées soit compris entre 1 et 6.
     Attention l'écriture 1<=chooseNumber<=6* ne marche pas en JS. Il faut faire en plusieurs étapes avec &&*/
    if (1<=chooseNumber && chooseNumber<=6){
        return chooseNumber;  
    } else{
        var tryAgain = window.prompt("Non. Entrer un nombre de 1 à 6");
        return tryAgain
    }
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



