function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const checkYearButton = document.getElementById('checkYear');
    const yearInput = document.getElementById('year');
    const resultParagraph = document.getElementById('result');
  
    checkYearButton.addEventListener('click', () => {
      const year = parseInt(yearInput.value);
      const leapYear = isLeapYear(year);
  
      if (leapYear) {
        resultParagraph.textContent = `${year} is a leap year.`;
      } else {
        resultParagraph.textContent = `${year} is not a leap year.`;
      }
    });
  });