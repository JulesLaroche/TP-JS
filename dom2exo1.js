/*
    Ecrivez un code HTML + JS qui permet :
    De demander le nom de l'utilisateur (input)
    D'afficher  le nom de l'utilisateur sur la page (par ex. Bonjour Nom)
*/

/*
    Ecouter le click sur le bouton
    Récupérer le contenu (value) de mon input
    Afficher Bonjour Prénom
*/



let btn = document.querySelector(`#btn`)
btn.addEventListener("click", () => {
    let nom = document.querySelector(`#nom`)
    let bonjour = nom.value
    document.querySelector(`#bonjour`).innerHTML = "Bonjour " + bonjour
})