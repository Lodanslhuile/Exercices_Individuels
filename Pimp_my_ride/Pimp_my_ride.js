let tripToParse = "Perdita 8 10 8"

function parseTrip(trip) {
	const tripArray = tripToParse.split(" ");
	//chaîne de caractère de la ligne 1 transformée en array et stockée dans la variable tripArray
	
	let categories = ['client', 'start', 'duration', 'price'];
	
	let tripObj = {};
	
	categories.forEach((element,index) => {
		tripObj[element] = tripArray[index];
		});
	// https://bobbyhadz.com/blog/javascript-create-object-from-two-arrays
}

console.log(parseTrip(tripToParse))










