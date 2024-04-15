function afficherJoursSemaines() {
  const joursSemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  let daysDiv = document.getElementById('days');

  for (let i = 0; i < joursSemaines.length; i++) {
    let day = document.createElement('p');
    day.textContent = joursSemaines[i];
    daysDiv.appendChild(day);
  }
}