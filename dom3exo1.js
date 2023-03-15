/*
    Ecrivez un script qui permet de modifier le h1 de la page
    Ecrivez un script qui permet d'ajouter un paragraphe après ce h1
*/

const h1 = document.querySelector('h1');
h1.innerText = 'Bonjour';
const p = `<p> Ca va ? </p>`
h1.insertAdjacentHTML("afterend", p)