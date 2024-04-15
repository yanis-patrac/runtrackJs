function tri(numbers, order) {
  if (order !== 'asc' && order !== 'desc') {
    throw new Error('Le paramètre "order" doit être "asc" ou "desc".');
  }

  const sortedNumbers = [...numbers].sort((a, b) => {
    if (order === 'asc') {
      return a - b;
    } else {
      return b - a;
    }
  });

  return sortedNumbers;
}

const form = document.getElementById('tri-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const numbersInput = form.elements['numbers'];
  const numbers = numbersInput.value.split(',').map(Number);
  const orderSelect = form.elements['order'];
  const order = orderSelect.value;
  try {
    const sortedNumbers = tri(numbers, order);
    result.textContent = sortedNumbers.join(',');
  } catch (error) {
    result.textContent = error.message;
  }
});