document.getElementById("filter-button").addEventListener("click", function () {
    fetch("pokemon.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            var id = document.getElementById("id").value;
            var name = document.getElementById("name").value;
            var type = document.getElementById("type").value;
            var result = document.getElementById("result");
            result.innerHTML = "";
            for (var i = 0; i < pokemon.length; i++) {
                var p = pokemon[i];
                if (
                    (id == "" || p.id == id) &&
                    (name == "" || p.name.english == name) &&
                    (type == "" || p.type.includes(type))
                ) {
                    result.innerHTML +=
                        "<p>" +
                        p.id +
                        ": " +
                        p.name.english +
                        " (" +
                        p.type.join(", ") +
                        ")</p>";
                }
            }
        });
});