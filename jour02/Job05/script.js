// Ajout d'un écouteur d'événement pour détecter le scrolling de la page
window.addEventListener("scroll", function() {
  // Calcul du pourcentage de scrolling
  var scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  // Mise à jour de la couleur du footer en fonction du pourcentage de scrolling
  document.querySelector("footer").style.backgroundColor = `hsl(${scrollPercent}, 50%, 50%)`;
});
