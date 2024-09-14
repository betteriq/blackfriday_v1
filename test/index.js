let totalSeconds = 30 * 24 * 60 * 60; // 30 days in seconds

function updateTimer() {
  let days = Math.floor(totalSeconds / (24 * 3600));
  let hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  document.getElementById("days").textContent = "روزها: " + days;
  document.getElementById("hours").textContent = "ساعت‌ها: " + hours;
  document.getElementById("minutes").textContent = "دقیقه‌ها: " + minutes;
  document.getElementById("seconds").textContent = "ثانیه‌ها: " + seconds;
  document.getElementById("total").textContent = "ثانیه‌ها: " + totalSeconds;

  if (totalSeconds > 0) {
    totalSeconds--;
  }
}
console.log(totalSeconds);
setInterval(updateTimer, 1000); // Update every second
