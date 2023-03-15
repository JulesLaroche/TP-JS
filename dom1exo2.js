/*
    Développez le jeu pour découvrir le nombre secret.
    Cette fois-ci, vous devez laisser le joueur choisir le nombre.
    A chaque nombre choisi, vous devez afficher : Plus grand, plus petit, gagné ou perdu selon les cas.
    Le joueur n'a le droit qu'à 10 essai.
    Vous devez afficher et laisser choisir le joueur directement sur la page HTML
*/

let randomNumber = Math.floor(Math.random() * 100) + 1;
let test = 0;

let btn = document.querySelector(`#btn`)
btn.addEventListener("click", () => {
    let num1 = document.querySelector(`#num1`).value
    document.querySelector(`#essai`).innerHTML += `${num1} </br>`

    if (num1 < randomNumber) {
        document.querySelector(`#calcul`).innerHTML = `${num1} est trop petit` 
    } else if (num1 > randomNumber) {
    document.querySelector(`#calcul`).innerHTML = `${num1} est trop grand`
    }
    else {
        document.querySelector(`#calcul`).innerHTML = `${num1} c'est gagné`
    }
    test++;
    document.querySelector(`#essai2`).innerHTML = `Nombre de test: ${test}`
    if (test == 10) {
        document.querySelector(`#calcul`).innerHTML = "Perduuuuu"
        document.querySelector(`#essai`).innerHTML = `Le nombre était ${randomNumber}`
    } else if (test == 11) {
        window.location.reload();
    }
    
})
