// // Variable booléene
// // variable qui ne peux pas changer
// // chaine de caractère
// // variable num sans virgule
// // variable num a virgule

// let bool = 0;
// const seuil = "Ne change plus";
// let chaine = "ma chaine de caractère";
// let num1 = 15;
// let virgule = 12.4;



// // inverser les variables comme sur java

// let a = 6;
// let b = 3;

// let c = a;
// a = b;
// b = c;
// console.log(`la valeur de a : ${a} et pour b : ${b}`)


// // calcul tva

// let prix = 10;
// const TVA = 0.2;
// let TTC = prix + (prix*TVA);
// console.log(`le prix est de ${prix} Eur, la TVA est ${prix*TVA} Eur, le prix TTC ${TTC} Eur `)



// let heure = 17;
// if (heure < 12 && heure > 7.5) {
//     console.log(`salut`);
// } else if (heure < 17 && heure >= 12 ) { 
//     console.log(`bonjour`);
// } else if (heure < 23) {
//     console.log(`bonsoir`);
    
// } else  {
//     console.log(`vas te coucher`);
// }



// let num = 12;
// if (num < 15) {
//     console.log(num*6);
// } else {
//     console.log(num);
// }




// let prixPanier = 140;
// let remiseMinRequis = 150;
// let prixFinal;                      
// if (prixPanier >= remiseMinRequis){
//     let remise;
//     if (prixPanier > 150 && prixPanier < 250){
//         remise = 40;
//     } else if (prixPanier > 250 && prixPanier < 300){
//         remise = 50;
//     } else {
//         remise = 60;
//     }
//     prixFinal = prixPanier - remise;
//     console.log(`Prix final : ${prixFinal}`)
// }
// console.log(`Prix final : ${prixPanier}`)




// let nb1= 4;

// switch(nb1) {
//     case 8:
//         console.log("Le nombre 1 vaut 8" );
//     break;
//     case 10:
//         console.log("Le nombre 1 vaut 10");
//     break;
//     case 12:
//         console.log("Le nombre 1 vaut 12");
//     break;
//     default:
//         console.log("aucune condition");
// }



// let compte= "abonné";
// switch(compte) {
//     case "abonné":
//         console.log("vous etes abonné" );
//     break;
//     case "contributeur":
//         console.log("vous etes contributeur");
//     break;
//     case "admin":
//         console.log("vous etes admin");
//     break;
//     default:
//         console.log("aucune condition");
// }




// for (let i = 0; i <= 100; i = i + 2 ) {
//     console.log (`${i}`);
// }


// for (let i = 1; i <= 10; i++ ) {
//     console.log (`${i} x 5 = ${i*5}`);
// }



// let x = 25;
// for (let i = 1; i <= x; i++ ) {
//     console.log (`${i} x 5 = ${i*5}`);
// }



// let i=0;
// while (i<100) {
//     console.log( i );
//     i = i+2;
// }


// let x= 5;
// let i= 1;
// let y= 4;
// while (i<=y) {
//     console.log( `${x} * ${i} = ${i*x}` );
//     i++;
// } 


// // tableau

// let monTableau = [1,true,3,"ola",5.2]

// console.log( monTableau.length );
// console.log( monTableau[3] );
// console.table( monTableau );


// let monObjet = {
//     marque: "Renault",
//     modele: "clio",
//     annee: 2020,
//     bonEtat: true,
//     revisionDate: ["14/02/2021", "15/02/2020"]
// };

// console.log( monObjet.marque)
// console.log( monObjet)
// monObjet.vente = "En cours";
// console.table( monObjet.revisionDate ); 


// let formation = "CDA"

// let etudiant = {
//     nom: "Julien",
//     prenom: "Jean",
//     formation,
//     dateNaissance: "19/02/2020",
//     age: 3,
//     notes: [8,4,9,11]
// }
// console.log( etudiant);


// // la boucle forEach est identique a une boucle for avec une affichage en boucle de mon tableau

// let monTableau2 = [1,true,3,"ola",5.2]
// let cases = 0

// monTableau2.forEach((data) => {
// console.log( "la note est " + data )
// cases++ }
//  )  
// console.log( "il y a " +cases + " cases");


// console.log( "il y a " + monTableau2.length + " cases" );




// let monTableau3 = [12,8,3.32,10,13.5]
// let noteSup = 0
// let moyenne = 0

// monTableau3.forEach((data) => {
// if (data >= 10) {
//     noteSup++ }
// moyenne = moyenne + data
//  } 
//  )  
// console.log( "il y a " + noteSup + " notes au dessus de 10" );
// console.log( "la moyenne est " + (moyenne / monTableau3.length ).toFixed(2) );


// // creer des fonctions

// function direBonjour (firstName, lastName) {
//     return `Bonjour ${firstName} ${lastName} !`
// }
// console.log(direBonjour("Paul"))
// console.log(direBonjour("Pierre!"))

// let myName = "Jean";
// console.log(direBonjour(myName))



// function calcul (nb1, nb2) {
//     let résultat = nb1 + nb2;
//     résultat = résultat * 2;
//     return résultat;
// }
// console.log(calcul(10, 20))



// function add(nb1,nb2,nb3) {
//     return nb1 + nb2 + nb3;
// }
// console.log(add(10, 20, 30))


// function add(nb1,nb2,nb3) {
//     return Number(nb1) + Number(nb2) + Number(nb3);
// }
// console.log(add(10, 20, 30))



// function add(table) {
//     let somme = 0;
//     table.forEach((element) => {
//         somme = somme + element; 
//     })
//     return somme;
// }
// console.log(add([12,25,4.5]))






// function moy1(table) {
//     let sum = 0;
//     table.forEach((element) => {
//         sum = sum + element; 
//     })
//     return sum/table.length;
// }
// let notes = [1,2,3,4,5,6,7,8,9,10];
// console.log(moy1(notes))




// function student(nom, prenom, age, formation, notes){
//     return {
//         nom,
//         prenom,
//         formation,
//         age,
//         notes
//     }
// }

// let jules = student("Jules", "Pierre", 30, "CDA", [1, 12, 20])
// let pierre = student("mich", "Pierre", 30, "CDA", [1, 12, 20])
// console.log(jules.notes)




// let liste = [];

// function student(nom, prenom, age, formation, notes) {
//   let student = {
//     nom,
//     prenom,
//     age,
//     formation,
//     notes,
//   };
//   liste.push(student);
//   return student;
// }
// let galabru = student("michel", "galabru", 25, "CDA", [12, 15, 25, 35]);
// let michel = student("michel", "louis", 25, "CDA", [12, 15, 25, 35]);
// console.log(liste);




// utilisation du DOM

let div = document.querySelector(`#root`).innerHTML = `nouveau contenu`
let section = document.querySelector(`section`).innerHTML = `voilaaaa`
let section2 = document.querySelector(`#sect2`)
section2.innerHTML = `lalal`


let el = document.querySelector(`input`)
el.addEventListener("input", (e) => {
    console.log(e.target.value)
})


let num1 = document.querySelector(`#num1`)
let num2 = document.querySelector(`#num2`)

// num2.addEventListener("input", () => {
//     let resultat = Number(num1.value) + Number(num2.value)
//     document.querySelector(`#resultat`).innerHTML = resultat
    
// })

let btn = document.querySelector(`#btn`)
btn.addEventListener("click", () => {
    let resultat = Number(num1.value) + Number(num2.value)
    document.querySelector(`#resultat`).innerHTML = resultat
})


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

let nom = document.querySelector(`#nom`)
nom.addEventListener("input", () => {
    let bonjour = nom.value
    document.querySelector(`#bonjour`).innerHTML = "Bonjour " + bonjour
})




