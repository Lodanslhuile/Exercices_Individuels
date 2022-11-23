//Etape 1

//ressources https://codes-sources.commentcamarche.net/source/15737-verifier-une-date et https://bobbyhadz.com/blog/javascript-date-validation-dd-mm-yyyy#:~:text=To%20validate%20a%20date%20that,the%20string%20is%20formatted%20correctly.

function isValidDate(d) {
	e = new RegExp("^[0-9]{2}\/[0-9]{2}\/([0-9]{4})$");
	
    if (d.match(e) === null) {
        return false;
      }
	// On sépare la date en 3 variables pour vérification, parseInt() converti du texte en entier
	j = parseInt(d.split("/")[0], 10); // jour
	m = parseInt(d.split("/")[1], 10); // mois
	a = parseInt(d.split("/")[2], 10); // année


	// Définition du dernier jour de février
	// Année bissextile si annnée divisible par 4 et que ce n'est pas un siècle, ou bien si divisible par 400
	if (a%4 == 0 && a%100 !=0 || a%400 == 0) fev = 29;
	else fev = 28;

	// Nombre de jours pour chaque mois
	nbJours = new Array(31,fev,31,30,31,30,31,31,30,31,30,31);

	// Enfin, retourne vrai si le jour est bien entre 1 et le bon nombre de jours, idem pour les mois, sinon retourn faux
	return ( m >= 1 && m <=12 && j >= 1 && j <= nbJours[m-1] );
}

  console.log(isValidDate('03/02/2024')); 
  console.log(isValidDate('35/01/2022')); 
  console.log(isValidDate('hello')); 