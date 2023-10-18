//-----CODE NON DRY------

//variable de différentes personnes
let personne1 = "jean";

let personne2 = "paul";

let personne3 = "marcel";

// //On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom
// personne1 = personne1[0].toUpperCase() + personne1.substr(1);
// const longueurPrenom1 = personne1.length;
// console.log(`Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`);

// //On met la première lettre en majuscule, on salue la deuxième personne et on donne le nombre de lettre dans son prénom
// personne2 = personne2[0].toUpperCase() + personne2.substr(1);
// const longueurPrenom2 = personne2.length;
// console.log(`Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`);

// //On met la première lettre en majuscule, on salue la troisième personne et on donne le nombre de lettre dans son prénom
// personne3 = personne3[2].toUpperCase() + personne3.substr(1);
// const longueurPrenom3 = personne3.length;
// console.log(`Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`);



const Personnes = ["paul", "jean", "marcel"]; 

Personnes.forEach((name, index) => {   
     console.log(`Bonjour ${name[0].toUpperCase() + name.substr(1)}, ton prénom contient ${name.length} lettres`);} )


// const Personnes2 = [65, 13, 12];

// for(let t in Personnes)
// console.log(t)

// for (let i = 0; i < Personnes.length; i++) {
//     let name  = Personnes[i][0].toUpperCase() + Personnes[i].substr(1);
//     console.log(`Bonjour, ${name}, ton prénom contient ${Personnes[i].length} lettres`);
// }
 






//-----CODE MAL NOMMÉ------

//tableau des ages des élèves dans la classe
const agesEleves = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const nombresEleves = agesEleves.length;
// variable pour calculer la somme des ages
let somme = 0;
for(let somme of agesEleves){
  somme += df;
}
//moyenne d'age dans la classe
const Moyenne = mf / kf;
console.log('Il y a ' + agesEleves.length + " élèves dans la classe et la moyenne d'age est " + agesEleves);
    


//-----CODE MAL MIS EN FORME------

const temperature = 25;

if (temperature < 10){ 
     console.log( "Il fait très froid" );
}
else if (temperature < 0){
    console.log( "Il fait froid" );
}

else if( temperature < 10 ){
    console.log( "Il fait frais " );
}
else if( temperature < 20 ){
    console.log( "Il fait doux" );

}
else if(temperature < 30){
    console.log( "Il fait bon" );
}
else{
    console.log( "Il fait chaud" );
}
