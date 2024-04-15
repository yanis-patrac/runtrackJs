function fizzBuzz() {
  const fizzbuzzList = document.getElementById('fizzbuzz-list');
  for (let i = 1; i <= 151; i++) {
    const listItem = document.createElement('li');
    if (i % 3 === 0 && i % 5 === 0) {
      listItem.textContent = "FizzBuzz";
    } else if (i % 3 === 0) {
      listItem.textContent = "Fizz";
    } else if (i % 5 === 0) {
      listItem.textContent = "Buzz";
    } else {
      listItem.textContent = i;
    }
    fizzbuzzList.appendChild(listItem);
  }
}

fizzBuzz();