document.getElementById("button").addEventListener("click", function() {
  var citations = [
      "La vie a beaucoup plus d'imagination que nous",
      "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
      "La première impression est toujours la bonne.",
      "Le temps est l'ennemi numéro un de la motivation.",
      "Le bonheur est un voyage, pas une destination."
  ];
  var randomCitation = citations[Math.floor(Math.random() * citations.length)];
  document.getElementById("citation").textContent = randomCitation;
});