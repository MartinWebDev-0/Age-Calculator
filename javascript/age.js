document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    document.querySelector('.separation img').click();
  }
});

document.querySelector('.separation img').addEventListener('click', function () {
  const inputYear = parseInt(document.getElementById('year').value, 10);

  const actualYear = new Date().getFullYear();

if (inputYear > actualYear) {
  const error = document.getElementById('error');
  error.innerHTML = "L'anno di nascita non può essere nel futuro!";
  return;
}

  const inputMonth = parseInt(document.getElementById('month').value, 10);
  const inputDay = parseInt(document.getElementById('day').value, 10);

  const error = document.getElementById('error');
  error.innerHTML = "";

  if (
    isNaN(inputYear) || isNaN(inputMonth) || isNaN(inputDay) ||
    inputMonth < 1 || inputMonth > 12 ||
    inputDay < 1 || inputDay > 31
  ) {
    error.innerHTML = "inserisci una data valida!";
    return;
  }

  const birthDate = new Date(inputYear, inputMonth - 1, inputDay);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

 

  if (ageDays < 0) {
    ageMonths--;
    const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += daysInPreviousMonth;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageYears === 0) {
  ageYears = "0";
}


  document.querySelector('.date-display').innerHTML = `
    <p class ="purple">${ageYears} anni</p>
    <p class ="purple">${ageMonths} mesi</p>
    <p class ="purple">${ageDays} giorni</p>
  `;
});
