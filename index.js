
const pierre = [{ P: "égalité" }, { F: "défaite" }, { C: "victoire" }];
const feuille = [{ P: "victoire" }, { F: "égalité" }, { C: "défaite" }];
const ciseaux = [{ P: "défaite" }, { F: "victoire" }, { C: "égalité" }];
let scorePlayer=0;
let scoreSkynet=0;



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

// convertion du math floor/math random en chaine de caractere exploitable pour l' information utilisateur -(return d'une chaine de caractère plus simple directement dans la fonction choixPc ())

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

function affResultat(){
  
  if(choiceUser=== "pierre"){
    return pierreR;

  }else if(choiceUser==="feuille"){
    return feuilleR;
  }else{
    return ciseauxR;
  }


}
let resultat;

// fonction duel non concluant (mais exploitable en l'améliorant), essai du switch plus fonctionnel:

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

// mise en route du "SHIFOUMI" avec l'utilisation des différentes fonction par rapport au choix utilisateur dés le "click" sur le button 
let userbtn = document.getElementById("utilisateur");
userbtn.addEventListener("click", (event) => {
  
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
     choiceUser = "Entrez un choix parmis ceux proposé précedement ";
      break;
  }

    resultat = affResultat();
    console.log(resultat);
  let affPlayer = document.getElementById("player");
  if(choiceUser === "Entrez un choix parmis ceux proposé précedement "){
    affPlayer.innerHTML="<h2>"+choiceUser+" !</h2>";
  }else{
    affPlayer.innerHTML="<h2>Vous avez choisi "+choiceUser+" !</h2>";
  }

  let choiceSkynet = document.getElementById("skynet");
  if(choiceUser!= "Entrez un choix parmis ceux proposé précedement "){
    choiceSkynet.style.display= "block";
    choiceSkynet.innerHTML= "<h2>"+PC+" !</h2>";
  }else{
    choiceSkynet.style.display= "none";;
  }
  
  let affResult = document.getElementById("result");
  if(choiceUser!= "Entrez un choix parmis ceux proposé précedement "){
    affResult.style.display= "block";
    affResult.innerHTML="<h2>C'est une "+resultat+" !</h2>";
  }else{
    affResult.style.display= "none";
  }


  let scoreP = document.getElementById("player-score");
  if( resultat == "victoire"){
    scorePlayer ++;
    scoreP.innerHTML= ""+scorePlayer.toString()+"";
  }
  console.log(scorePlayer);

  let scoreS= document.getElementById("skynet-score");
  if( resultat == "défaite"){
    scoreSkynet ++;
    scoreS.innerHTML=""+scoreSkynet.toString()+"";
  }
  console.log(scoreSkynet);
  
  let affCounter= document.getElementById("counter");
  if( scorePlayer > scoreSkynet){
    affCounter.style.color="green";
  }else if(scorePlayer< scoreSkynet){
    affCounter.style.color="red";
  }else{
    affCounter.style.color="black";
  }


});


