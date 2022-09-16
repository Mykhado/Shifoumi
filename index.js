// const F = 1;
// const P = 2;
// const C = 3;
// pierre = 1 feuille=2 ciseaux=3
const pierre = [{ P: "egalité" }, { F: "défaite" }, { C: "victoire" }];
const feuille = [{ P: "victoire" }, { F: "égalité" }, { C: "défaite" }];
const ciseaux = [{ P: "défaite" }, { F: "victoire" }, { C: "égalité" }];

// let objet = [pierre, feuille, ciseaux];

// console.log(objet);

function choixUser() {
  let user = prompt("Saisir: pierre, feuille ou ciseaux");
  return user;
}
let choiceUser = choixUser();

function choixPc(max) {
  return Math.floor(Math.random() * max);
  // if (Math.floor(Math.random() * max) === 0) {
  //     random = feuille;
  // } else if (Math.floor(Math.random() * max) === 1) {
  //     random = pierre;
  // } else if (Math.floor(Math.random() * max) === 2) {
  //     random = ciseaux;
  // }
  // console.log(random);
  // return random
}
let PC = choixPc(3);
// console.log(PC);

// function convertPcChoice() {
//   if (PC === 0) {
//     return "Skynet a choisi pierre";
//   } else if (PC === 1) {
//     return "Skynet a choisi Feuille";
//   } else {
//     return "Skynet a choisi ciseaux";
//   }
// }
// let choicePC = convertPcChoice();
// console.log(choicePC);

function randomFeuille() {
  if (choixPc(3) === 0) {
    return feuille[0].P;
  } else if (choixPc(3) === 1) {
    return feuille[1].F;
  } else if (choixPc(3) === 2) {
    return feuille[2].C;
  }
}
let feuilleR = randomFeuille();
// console.log(feuilleR);

function randomPierre() {
  if (choixPc(3) === 0) {
    return pierre[0].P;
  } else if (choixPc(3) === 1) {
    return pierre[1].F;
  } else if (choixPc(3) === 2) {
    return pierre[2].C;
  }
}
let pierreR = randomPierre();
// console.log(pierreR);

function randomCiseaux() {
  if (choixPc(3) === 0) {
    return pierre[0].P;
  } else if (choixPc(3) === 1) {
    return pierre[1].F;
  } else if (choixPc(3) === 2) {
    return pierre[2].C;
  }
}
let ciseauxR = randomCiseaux();
// console.log(ciseauxR);

function duel() {
  if (choiceUser === "pierre") {
    return pierreR;
  } else if (choiceUser === "feuille") {
    return feuilleR;
  } else if (choiceUser === "ciseaux") {
    return ciseauxR;
  } else {
    return "Entrez un choix parmis ceux proposé precedement ";
  }
}
let resultat = duel();

let userbtn = document.getElementById("utilisateur");
userbtn.addEventListener("click", (event) => {
  // choiceUser = choixUser();
  choixUser();
  console.log(choiceUser);
  choixPc();
  // console.log(choicePC);
  duel();
  console.log(resultat);
});
