document.getElementById("update-button").addEventListener("click", function () {
    fetch("utilisateur.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (utilisateurs) {
            var tableBody = document.getElementById("user-table-body");
            tableBody.innerHTML = ""; // Efface le contenu précédent du tableau
            utilisateurs.forEach(function (utilisateur) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>" + utilisateur.id + "</td>" +
                                "<td>" + utilisateur.nom + "</td>" +
                                "<td>" + utilisateur.prenom + "</td>" +
                                "<td>" + utilisateur.email + "</td>";
                tableBody.appendChild(row); // Ajoute une ligne pour chaque utilisateur
            });
        });
});
