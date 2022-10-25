let titre = document.getElementById("h1");
titre.innerHTML= "Recette des p\u00e2tes \340 la Carbonara";

let ingredients = ["P\u00e2tes","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"]
let sortedIngredients = ingredients.sort();

let indication = document.getElementById("h2");
indication.innerHTML= "Pour cette recette vous avez besoin de " + ingredients.length + " ingr\351dients";


let list = document.getElementById("myList");
sortedIngredients.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
 });





// https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/
//https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/#:~:text=We%20can%20do%20this%20in,of%20objects%20with%20name%20users.

