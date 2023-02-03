//https://github.com/adatechschool/Exercices-individuels-Dorothy-Vaugan-Nantes/blob/master/14_poker.md

//Etape 1

let numbers =["1","2","3","4","5","6","7","8","9","10","V","D","R"];
let symbols = ["♠","♥","♦","♣"];
let cards = [];

function createDeck () {
    //Création du deck de cartes de façon ordonnée
    for (let i=0; i<numbers.length; i++){
        for(let j=0; j<symbols.length; j++){
           cards.push(numbers[i]+symbols[j])
        }
    }

    /* Création du shuffle.
    shuffle ressource : https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...*/

    for (let i = cards.length - 1; i > 0; i--) {
        /*La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x
        Math.random renvoie un nombre aléatoire entre 0 et i*/
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    return cards
}

console.log(createDeck())