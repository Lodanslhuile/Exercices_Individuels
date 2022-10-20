const message = '\ud83d\udc4b Bonjour'
var prenom = window.prompt('quel est ton pr\351nom?')
var naissance = Number(window.prompt('quelle est ton année de naissance?'));

document.body.innerHTML += '<h2>' + message + ' ' + prenom + '</h2>';
var aujd = new Date();
var year = aujd.getFullYear();

function AgeCal(year,naissance) {
    return year - naissance;
}

var age = AgeCal(year, naissance)

document.body.innerHTML += '<h3> Vous avez ' + age + ' ans</h3>';


console.log(message + prenom)
console.log(naissance)
console.log(year)
console.log(age)