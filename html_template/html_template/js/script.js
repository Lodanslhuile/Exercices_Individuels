function askName() {
    const name = prompt("Comment tu t'appelles ?")
    const greetings = "\ud83d\udc4b Hello " + name

    document.getElementById("name").innerText = greetings
}

function askBirthYear() {
    const birthYear = prompt('Quelle est ton année de naissance ?')
    const birthMonth = prompt('Quelle est ton mois de naissance ?')

    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth() + 1

    let age = currentYear - birthYear

    if (birthMonth > currentMonth) {
        age = age - 1
        // age -= 1
        // age--
    }

    let birthYearMessage = "Vous avez " + age + " ans"

    if (birthMonth != currentMonth) {

        let monthNumber = (12 + currentMonth - birthMonth ) % 12
        
        // if (birthMonth < currentMonth) {
        //     monthNumber = currentMonth - birthMonth
        // }

        birthYearMessage += " et " + monthNumber + " mois"
    }

    // let monthNumber;

    // if (birthMonth > currentMonth) {

    //     monthNumber = 12 + currentMonth - birthMonth
    // }
    // else if (birthMonth < currentMonth) {

    //     monthNumber = currentMonth - birthMonth
    // }

    // if (birthMonth != currentMonth) {
    //     birthYearMessage += " et " + monthNumber + " mois"
    // }

    document.getElementById("age").innerText = birthYearMessage
}

askName()
askBirthYear()






