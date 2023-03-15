/*
    Ecrivez un code HTML + JS qui permet :
    De demander à l'utilisateur d'entrer un nombre
    D'afficher à l'utilisateur son nombre multiplié par 2
    Par exemple : 
        Si l'utilisateur entre 5
        Le code doit afficher 10
        Si l'utilisateur entre 12
        Le code doit afficher 24
    Vous ne devez PAS utiliser de console.log
    Vous DEVEZ afficher le résultat directement sur la page
*/


let btn = document.querySelector(`#btn`)
btn.addEventListener("click", () => {
    let calcul = Number(num1.value) * 2
    document.querySelector(`#calcul`).innerHTML = "le multiple par 2 de " + num1.value + " est " + calcul
})