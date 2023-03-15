/*
    Ecrivez un code HTML + JS qui permet :
    De demander à l'utilisateur d'entrer deux nombres différents
    Inversez les deux valeurs
    Afficher à l'utilisateur :
        - La valeur A = (valeur A) et la valeur B = (valeur B)
    Puis ensuite afficher dessous :
        - La valeur A est maintenant égale à (valeur A) et la valeur B est maintenant égale à (valeur B)
*/


let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let origine = document.getElementById("origine");
let btn = document.querySelector(`#btn`);
let btn2 = document.querySelector(`#btn2`);
btn.addEventListener("click", () => {
document.querySelector(`#origine`).innerHTML = "La valeur A = " + num1.value + " et la valeur B = " + num2.value
})

let inverser = document.getElementById("inverser");
btn2.addEventListener("click", () => {
    let x = num1.value
    num1.value = num2.value
    num2.value = x
    document.querySelector(`#inverser`).innerHTML = "La valeur A = " + num1.value + " et la valeur B = " + num2.value
    })