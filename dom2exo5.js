/*
    Ecrivez un code HTML + JS qui permet :
    De demander à l'utilisateur d'entrer un nombre
    Vous devez ensuite afficher la table de multiplication (jusqu'à 10) de ce nombre
*/

let num1 = document.querySelector("#num1");
let btn = document.querySelector("#btn");
let calcul = document.querySelector("#calcul");

btn.addEventListener("click", () => {   
    for (let i = 1; i <= 10; i++) {
        let resultat = Number(num1.value) * i
       
    calcul.innerHTML += num1.value +" x "+ i + " = " + resultat + "</br>"
}})