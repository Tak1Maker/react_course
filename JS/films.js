// Create your variables here
// ==========================================


    let numberOfSeasons = 6;
    let numberOfEpisodes = 12;
    let totalShowTime = 4320;


    // ==========================================

    let paragraph = document.getElementById("info");
    paragraph.innerText = `${numberOfSeasons} saisons, ${numberOfEpisodes} épisodes par saison

    Durée: ${totalShowTime} minutes.`

    // Create constants here
// =====================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerText = `${calcHours} heures`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} secondes`;
});


