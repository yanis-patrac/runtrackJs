function estPremier(nombre) {
  if (nombre < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      return false;
    }
  }
  return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
  if (estPremier(nombre1) && estPremier(nombre2)) {
    return nombre1 + nombre2;
  } else {
    return false;
  }
}

const form = document.getElementById('somme-nombres-premiers-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre1 = parseInt(form.elements['nombre1'].value);
  const nombre2 = parseInt(form.elements['nombre2'].value);
  const somme = sommeNombresPremiers(nombre1, nombre2);
  if (somme === false) {
    result.textContent = 'Les deux nombres ne sont pas premiers.';
  } else {
    result.textContent = `La somme des nombres premiers est ${somme}.`;
  }
});