// F = 1;
// P = 2;
// C = 3;
const pierre = [{ P: "egalité" }, { F: "défaite" }, { C: "victoire" }];
const feuille = [{ P: "victoire" }, { F: "égalité" }, { C: "défaite" }];
const ciseaux = [{ P: "défaite" }, { F: "victoire" }, { C: "égalité" }];

// let objet = [pierre, feuille, ciseaux];


function choixUser() {
  const user = prompt("Saisir: pierre, feuille ou ciseaux");
  return user;
}
let choiceUser ;


function choixPc(max) {
  let result= Math.floor(Math.random() * max);
  if ( result=== 0) {
    return "Skynet a choisi pierre";
  } else if (result === 1) {
    return "Skynet a choisi feuille";
  } else {
    return "Skynet a choisi ciseaux";
  }
}
let PC;


// function convertPcChoice() {

//   if (PC === 0) {
//     return "Skynet a choisi pierre";
//   } else if (PC === 1) {
//     return "Skynet a choisi Feuille";
//   } else {
//     return "Skynet a choisi ciseaux";
//   }
// }
// let choicePC ;


function randomFeuille() {
  
  if (PC === "Skynet a choisi pierre") {
    return feuille[0].P;
  } else if (PC=== "Skynet a choisi feuille") {
    return feuille[1].F;
  } else if (PC=== "Skynet a choisi ciseaux") {
    return feuille[2].C;
  }
}
let feuilleR;

// console.log(feuilleR);

function randomPierre() {
  
  if (PC=== "Skynet a choisi pierre") {
    return pierre[0].P;
  } else if (PC=== "Skynet a choisi feuille") {
    return pierre[1].F;
  } else if (PC === "Skynet a choisi ciseaux") {
    return pierre[2].C;
  }
}
let pierreR ;

// console.log(pierreR);

function randomCiseaux() {
  
  if (PC=== "Skynet a choisi pierre") {
    return ciseaux[0].P;
  } else if (PC === "Skynet a choisi feuille") {
    return ciseaux[1].F;
  } else if (PC=== "Skynet a choisi ciseaux") {
    return ciseaux[2].C;
  }
}
let ciseauxR;

// function duel() {

//   if (choiceUser === "pierre") {
//     return pierreR;
//   } else if (choiceUser === "feuille") {
//     return feuilleR;
//   } else if (choiceUser === "ciseaux") {
//     return ciseauxR;
//   } else {
//     return "Entrez un choix parmis ceux proposé précedement ";
//   }
// }
// let resultat;


let userbtn = document.getElementById("utilisateur");
userbtn.addEventListener("click", (event) => {
  
  // console.log(choiceUser);
  // PC=choixPc(3);
  // console.log(PC);
  // choicePC = convertPcChoice();
  // console.log(choicePC);
  choiceUser = choixUser();
  switch (choiceUser) {
    case "pierre":
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur1
      console.log(choiceUser)
      PC=choixPc(3);
      console.log(PC);
      pierreR=randomPierre();
      console.log(pierreR);
      break;
    case "ciseaux":
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      console.log(choiceUser)
      PC=choixPc(3);
      console.log(PC);
      ciseauxR = randomCiseaux();
      console.log(ciseauxR);
      break;
    
    case "feuille":
      // Instructions à exécuter lorsque le résultat
      // de l'expression à valeurN
      console.log(choiceUser)
      PC=choixPc(3);
      console.log(PC);
      feuilleR = randomFeuille();
      console.log(feuilleR);
      break;
    default:
      // Instructions à exécuter lorsqu'aucune des valeurs
      // ne correspond
      "Entrez un choix parmis ceux proposé précedement ";
      break;
  }
  // resultat=duel(); 
  // console.log(resultat);
});
