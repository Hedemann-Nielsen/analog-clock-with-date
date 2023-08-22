setInterval(updateClock, 1000);
// HTML-elementer
let clockContainer = document.getElementById('clock');
let hourHand = document.getElementById('hour-hand');
let minuteHand = document.getElementById('minute-hand');
let secondHand = document.getElementById('second-hand');

// Funktion til at opdatere urviserne
function updateClock() {
    //indhent nuværende tidspunkt
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Beregning af vinkler for viserne
    let hourAngle = (hours % 12) * 30 + minutes * 0.5;
    let minuteAngle = minutes * 6;
    let secondAngle = seconds * 6;

    // Anvendelse af vinklerne til urets visere
    hourHand.style.transform = 'rotate(' + hourAngle + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteAngle + 'deg)';
    secondHand.style.transform = 'rotate(' + secondAngle + 'deg)';

    //indhent nuværende dato
    let currentDay = currentTime.getDate();
    let currentMonth = currentTime.getMonth() + 1;
    let currentYear = currentTime.getFullYear();

    //inset dato i uret
    document.getElementById("day").innerHTML = currentDay
    document.getElementById("month").innerHTML = currentMonth
    document.getElementById("year").innerHTML = currentYear
}

// Opdater uret hvert sekund
// updateClock()



