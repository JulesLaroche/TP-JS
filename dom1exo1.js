/*
    Ecrivez un programme pour permettre à l'utilisateur d'entrer un temps
    en seconde, et le convertir en minutes.
    La conversion doit s'afficher sur la page HTML dans la div avec l'id convert
    Vous devez afficher la conversion sous cette forme : 
        xx secondes est égal à x minute
    Contraintes : 
        Vous devez prendre en compte :
            - D'afficher seconde au singulier s'il n'y a qu'une seconde
            - D'afficher seconde au pluriel s'il y a plus d'une seconde
            - D'afficher minute au singulier s'il n'y a qu'une minute
            - D'afficher minute au pluriel s'il y a plus d'une minute
*/


let btn = document.querySelector(`#btn`)
btn.addEventListener("click", () => {
    let secondes = document.querySelector(`#secondes`)
    let calcul = Number(secondes.value) / 60

    let reste = Number(secondes.value) % 60 // les secondes qui restent

    // let secondD = "seconde"
    // if(secondes.value > 1)
    // {
    //     secondD = "secondes"
    // } else {
    //     secondD = "seconde"
    // }

    // la variable = (la condition) ? valeur si VRAI : Valeur si faux
    let secondD = (reste > 1) ? "secondes" : "seconde"
    let minute = (secondes.value <= 60) ? "minute" : "minutes"

    // let decimalPart = calcul - Math.floor(calcul)

    document.querySelector(`#convert`).innerHTML = `${secondes.value} ${secondD} est égal à ${calcul.toFixed()} ${minute} et ${reste} ${secondD}` 

     
 
    // if (secondes.value <= 1) {
    // document.querySelector(`#convert`).innerHTML = secondes.value  + " seconde est égal à " + calcul.toFixed(2) + " minute" 
    // } else if (secondes.value > 1 && secondes.value <= 60) { 
    //     document.querySelector(`#convert`).innerHTML = secondes.value  + " secondes est égal à " + calcul.toFixed(2) + " minute" 
    // } else  {
    //     document.querySelector(`#convert`).innerHTML = secondes.value  + " secondes est égal à " + calcul.toFixed(2) + " minutes"
    // }
})

