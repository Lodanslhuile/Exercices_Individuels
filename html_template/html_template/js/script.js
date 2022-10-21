function askName() {
    
    const message = '\ud83d\udc4b Bonjour'
    var prenom = window.prompt('quel est ton pr\351nom?')

    document.body.innerHTML += '<h2>' + message + ' ' + prenom + '</h2>';
}

function askBirthYear() {
    var naissance = Number(window.prompt('quelle est ton ann\351e de naissance?'));
    
    var aujd = new Date();
    var year = aujd.getFullYear();
    var age = year - naissance

    document.body.innerHTML += '<h3> Vous avez ' + age + ' ans</h3>';
}

askName()
askBirthYear()


