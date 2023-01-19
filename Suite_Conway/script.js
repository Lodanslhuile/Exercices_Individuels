//https://github.com/adatechschool/Exercices-individuels-Dorothy-Vaugan-Nantes/blob/master/12_conway.md

//Etape 1 : découpe chaîne de caractère de façon à ce que les mêmes charactères soient groupés

function decoupeChaine (string){
let newStr = string.match(/(.)\1*/g);
return newStr
}

console.log(decoupeChaine("aabccde"));