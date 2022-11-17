let tripToParse = "Perdita 8 10 8"

function parseTrip(trip) {
	let tripArray = trip.split(" ");
	//chaîne de caractère de la ligne 1 transformée en array et stockée dans la variable tripArray

	let categories = ['client', 'start', 'duration', 'price'];
	
	let tripObj = {};

	categories.forEach((element,index) => {
		tripObj[element] = tripArray[index];
		});
		// https://bobbyhadz.com/blog/javascript-create-object-from-two-arrays

	return tripObj
}

console.log(parseTrip(tripToParse))

let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrips(trips) {
	let tripsToParse_Array=[] //créer un tableau vide.
	for (let i=0; i<trips.length; i++){ //permet de se balader dans le tableau.
	tripsToParse_Array.push(parseTrip(trips[i])) // appel la fonction précédente. Attention cette fois le paramètre doit prendre en compte l'index.
	}
	
	return tripsToParse_Array
}
parseTrips(tripsToParse)

console.log(parseTrips(tripsToParse))

let tripsToParse_Final_Array = parseTrips(tripsToParse) // variable permettant de stocker le résultat de la fonction parseTrips(trips)

function getTripsPrice(voyages){
	let sum = 0
	for (i=0; i<voyages.length;i++){
		sum+=parseInt(voyages[i].price)
	}
	return sum
}

getTripsPrice(tripsToParse_Final_Array)

console.log(getTripsPrice(tripsToParse_Final_Array)) 

function checkCompatibility(tripA,tripB){

	if (parseInt(tripB.start) >= (parseInt(tripA.start)+ parseInt(tripA.duration))){ //attention à bien transformer en entier avec parseInt
		return true
	}else if ((parseInt(tripB.start)+ parseInt(tripB.duration)) <= (parseInt(tripA.start))){
		return true
	}else{
		return false
	}
}

console.log(checkCompatibility(tripsToParse_Final_Array[3],tripsToParse_Final_Array[1]))
