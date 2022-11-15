let tripToParse = "Perdita 8 10 8"
//manipuler la chaine de caractère pour la trasnformer en un objet

function parseTrip(trip) {
	const tripArray = tripToParse.split(" ");
	return tripArray
}

console.log(parseTrip(tripToParse))

let categories = ['client', 'start', 'duration', 'price'];

let tripToArray = parseTrip(tripToParse);
//chaîne de caractère de la ligne 1 transformée en array et stockée dans la variable tripToArray

let tripObj = {};

categories.forEach((element,index) => {
tripObj[element] = tripToArray[index];
});
// https://bobbyhadz.com/blog/javascript-create-object-from-two-arrays

// categories.forEach(function(element,index){
// 	tripObj[element] = tripToArray[index];
// 	return tripObj
// });
//tentative de transformation de fonction fléchée en fonction anonyme

console.log(tripObj)