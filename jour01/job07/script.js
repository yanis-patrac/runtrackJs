function jourTravaille(date) {
  const joursFeries2024 = [
    new Date(2024, 0, 1), // Jour de l'an
    new Date(2024, 2, 21), // Lundi de Pâques
    new Date(2024, 4, 1), // Fête du Travail
    new Date(2024, 9, 1), // Toussaint
    new Date(2024, 11, 25), // Noël
  ];

  const jour = date.getDate();
  const mois = date.getMonth() + 1;
  const annee = date.getFullYear();
  const jourSemaine = date.getDay();

  if (joursFeries2024.includes(date)) {
    return `Le ${jour} ${mois} ${annee} est un jour férié.`;
  } else if ([0, 6].includes(jourSemaine)) {
    return `Non, le ${jour} ${mois} ${annee} est un week-end.`;
  } else {
    return `Oui, le ${jour} ${mois} ${annee} est un jour de travail.`;
  }
}

const form = document.getElementById('jour-travaille-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const jour = parseInt(form.elements['jour'].value);
  const mois = parseInt(form.elements['mois'].value);
  const annee = parseInt(form.elements['annee'].value);
  const date = new Date(annee, mois - 1, jour);
  const message = jourTravaille(date);
  result.textContent = message;
});