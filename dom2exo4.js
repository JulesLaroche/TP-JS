/*
    Ecrivez un code HTML + JS qui permet :
    De demander à l'utilisateur d'entrer son niveau de compte (Abonné, Contributeur, Administrateur)
    
    A l'aide d'un SWITCH :
        - Afficher à l'utilisateur :
            - Vous êtes un abonné. Dans le cas ou c'est un Abonné
            - Vous êtes un contributeur. Dans le cas ou c'est un Contributeur
            - Vous êtes un administrateur. Dans le cas ou c'est un Administrateur.
            - Vous n'êtes pas dans la liste. Dans tous les autres cas
*/

let btn = document.getElementById("btn");
let account = document.getElementById("account");
btn.addEventListener("click", () => {
switch(account.value) {
    case "abonné":
        document.querySelector(`#resultat`).innerHTML = "Vous êtes un abonné." 
    break;
    case "contributeur":
        document.querySelector(`#resultat`).innerHTML = "Vous êtes un contributeur." 
    break;
    case "admin":
        document.querySelector(`#resultat`).innerHTML = "Vous êtes un admin." 
    break;
    default:
        document.querySelector(`#resultat`).innerHTML = "Vous n'êtes pas dans la liste." 

}})