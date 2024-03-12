
// création de l'objet dice

let dice = {
  // crée la propriété sides qui est fixé à 6
    sides: 6,

  // crée méthode roll qui génère un nombre aléatoire selon le nombre de face renseignée
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  

// fonction qui affiche l'image correspondant au nombre number mis en paramètre dans l'id'placeholder
function printNumber(number) {
  let placeholder = document.getElementById('placeholder');

  // Crée un nouvel élément img
  let img = document.createElement('img');

  // Définit l'attribut src de l'élément img pour correspondre à l'image du dé
  img.src = 'img/de' + number + '.png';

  // Vide le contenu actuel du placeholder
  placeholder.innerHTML = '';

  // Ajoute l'élément img au placeholder
  placeholder.appendChild(img);
}
  
  // On stock le bouton d'id buttonjet dans une variable
  let buttonjet = document.getElementById('buttonjet');
  
  // Quand on clique sur le bouton, la fonction anonyme qui stocke dans result le résultat du dé de la fonction dans l'objet dice, puis on l'affiche grace à la fonction créée au dessus
  buttonjet.onclick = function() {
    let result = dice.roll();
    printNumber(result);

    console.log(result)
  };

  // On définit les variables qui nous seront utile ensuite
  let tourjoueur = 1;
  let result = 0;
  let sommeJoueur1 = 0;
  let sommeJoueur2 = 0;
  let scoreJoueur1 = 0;
  let scoreJoueur2 = 0;





// On veut que le style soit appliqué dès le chargement de la page, il sera modifié par la suite
    document.getElementById("l").style.backgroundColor = "grey";
    document.getElementById("m").style.backgroundColor = "white";

    document.querySelector(".p1").style.color="white";
    document.querySelector(".p2").style.color="grey";
    



  
// on crée la fonction tour qui définit le tour
  
  function tour() {

    // On stocke dans result la valeur généré aléatoirement avec la méthode roll dans l'objet créé dice et on l'affiche avec la fonction crrée printNumber 
    result = dice.roll();
    printNumber(result);
  
    // Si tourjoueur1 = 1 c'est le tour du joueur 1, et on ajoute le résultat du dé dans lélément p de class curr1
    if (tourjoueur === 1) {
      sommeJoueur1 += result;
      document.querySelector('p.curr1').innerHTML = sommeJoueur1;


    } 
    // Sinon, on ajoute, du coup au joueur 2 le résultat du dé dans l'élément p de class curr2 
    else {
      sommeJoueur2 += result;
      document.querySelector('p.curr2').innerHTML = sommeJoueur2;

    }
  
    // Si le dé est égal à 1, du coup, si result égal 1

    if (result === 1) {

      // on passe result à et on met sommejoueur qui passent à 0

      result = 0; 
   

      sommeJoueur1 = 0;
      sommeJoueur2 = 0;

      document.querySelector('p.curr1').innerHTML = sommeJoueur1;
      document.querySelector('p.curr2').innerHTML = sommeJoueur2;

      // puis on change la valeur de tourjoueur, pour changer le tour
      if (tourjoueur === 1) {
        tourjoueur = 2;
      } else {
        tourjoueur = 1;
      }

      // J'ai ajouté le style selon les tours
      if (tourjoueur === 1) {
        document.getElementById("l").style.backgroundColor = "grey";
        document.getElementById("m").style.backgroundColor = "white";
  
        document.querySelector(".p1").style.color="white";
        document.querySelector(".p2").style.color="grey";
  

      } else {
        document.getElementById("m").style.backgroundColor = "grey";
        document.getElementById("l").style.backgroundColor = "white";
  
        document.querySelector(".p2").style.color="white";
        document.querySelector(".p1").style.color="grey";
  

      }
    }
    // On écrit au tour de quel joueur on est
    let tourDiv = document.querySelector('.tourr');
    tourDiv.innerHTML = "C'est le tour du joueur " + tourjoueur;
  }            
  // ///////////////////FIN FONCTION TOUR
  
  let buttonhold = document.getElementById('buttonhold');
  
    // on crée une fonction anonyme qui change des valeurs quand le bouton buttonhold est cliqué

buttonhold.onclick = function() {

    // On ajoute à scorejoueur sommejoueur et on affiche scorejoueur dans le p de classe score, et la somme revient à 0
    if (tourjoueur === 1) {
      scoreJoueur1 += sommeJoueur1;
      document.querySelector('p.score').innerHTML = scoreJoueur1;
      sommeJoueur1 = 0;
    } 
    // On ajoute à scorejoueur 2 sommejoueur 2 et on affiche scorejoueur 2 dans le p de classe score, et la somme revient à 0
    else {
      scoreJoueur2 += sommeJoueur2;
      document.querySelector('p.score2').innerHTML = scoreJoueur2;
      sommeJoueur2 = 0;
    }

    // On change la valeur de tourjoueur
    if (tourjoueur === 1) {
          tourjoueur = 2;
    } else {
          tourjoueur = 1;
        }

    // On remet le dé et son affichage à 0
    result = 0; 
  
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = 0; 
  
    // On écrit le fait que ce soit le tour de l'autre joueur, la valeur de tourjoueur ayant changée
    let tourDiv = document.querySelector('.tourr');
    tourDiv.innerHTML = "C'est le tour du joueur " + tourjoueur;

    // Pour changer le style quand tourjoueur change

    if (tourjoueur === 1) {
      document.getElementById("l").style.backgroundColor = "grey";
      document.getElementById("m").style.backgroundColor = "white";

      document.querySelector(".p1").style.color="white";
      document.querySelector(".p2").style.color="grey";


    } else {
      document.getElementById("m").style.backgroundColor = "grey";
      document.getElementById("l").style.backgroundColor = "white";

      document.querySelector(".p2").style.color="white";
      document.querySelector(".p1").style.color="grey";


    }
    // ////////////FIN BOUTONHOLD.ONCLICK



// ////////////////////PARTIE FINIE
    // Si le score du joueur 1 ou 2 est supérieur ou égal à 100
    if (scoreJoueur1 >= 100 || scoreJoueur2 >= 100) {
      // on écrit dans l'élément de class finie que le joueur 1 ou 2 a gagné
      let finDiv = document.querySelector('.finie');
      if (scoreJoueur1 >= 10) {
        finDiv.innerHTML = "Le joueur 1 a gagné";
    } else {
        finDiv.innerHTML = "Le joueur 2 a gagné";
    }
    
    // Et on efface les boutons pour hold et pour le jet de dé et la class tour
      document.querySelector(".tourr").style.display="none";

      document.getElementById("buttonhold").style.display="none"

      document.getElementById("buttonjet").style.display="none"
    }
    
  };


  

    // Quand le bouton de jet de dé est cliqué, on commence le nouveau tour 
  buttonjet.onclick = function() {
    tour();
  };

  
  



let newg = document.getElementById('newg');
newg.onclick=function(){

location.reload();}
