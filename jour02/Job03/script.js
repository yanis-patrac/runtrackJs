// Sélection du bouton et du paragraphe
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur de clics
var clics = 0;

// Fonction pour ajouter un clic et mettre à jour le compteur
function addOne() {
    clics++;
    compteur.textContent = clics;
}

// Ajout d'un écouteur d'événement pour détecter les clics sur le bouton
button.addEventListener("click", addOne);
