document.getElementById("button").addEventListener("click", function() {
  fetch("expression.txt")
    .then(response => response.text())
    .then(data => {
      document.getElementById("expression").innerText = data;
    })
    .catch(error => {
      console.error('Une erreur s\'est produite:', error);
    });
});
