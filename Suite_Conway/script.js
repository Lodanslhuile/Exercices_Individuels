//https://github.com/adatechschool/Exercices-individuels-Dorothy-Vaugan-Nantes/blob/master/12_conway.md

//Etape 1 : découpe chaîne de caractère de façon à ce que les mêmes charactères soient groupés

function decoupeChaine (string){
let newStr = string.match(/(.)\1*/g);
return newStr
}

console.log(decoupeChaine("aabccde"));

//Etape 2 : écrire une fonction decritChaine("ab") qui renvoie "1a1b"

function decritChaine (string) {
    let array = decoupeChaine (string)
    let newArray = ""
    for (let i=0; i<array.length; i++) {
        /*je boucle pour avoir la longueur de la chaîne de caractère (array[i].length) 
        je fait une deuxième boucle qui permet de lire le premier caractère de chaque élément du tableau (array[i][0])*/
        newArray += (array[i].length)+(array[i][0])
    }

 return newArray
}

console.log(decritChaine("aabbbcccdde"))

