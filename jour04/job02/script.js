function jsonValueKey(jsonString, key) {
  try {
    const jsonObject = JSON.parse(jsonString);
    if (key in jsonObject) {
      return jsonObject[key];
    } else {
      return "";
    }
  } catch (error) {
    console.error("Erreur de parsing JSON:", error);
    return null;
  }
}

// Chaîne JSON
const jsonString = '{"nom": "Jean", "âge": 30, "ville": "Paris"}';

// Récupération de la valeur associée à la clé "âge"
const age = jsonValueKey(jsonString, "âge");

// Affichage de la valeur
document.getElementById("output").innerText = "L'âge est: " + age;
