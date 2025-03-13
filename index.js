
// Set the date we're counting down to
const targetDate = new Date("2025-03-15T12:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the results
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);