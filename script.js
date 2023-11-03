const dayElement = document.getElementById('day');
const hourElement = document.getElementById('hour');
const minElement = document.getElementById('minute');
const secElement = document.getElementById('second');

const newYearTime = new Date('Jan 1, 2024 00:00:00').getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const dayRemaining = Math.floor(gap / day);
  const hourRemaining = Math.floor((gap % day) / hour);
  const minRemaining = Math.floor((gap % hour) / minute);
  const secRemaining = Math.floor((gap % minute) / second);

  dayElement.innerText = dayRemaining;
  hourElement.innerText = hourRemaining;
  minElement.innerText = minRemaining;
  secElement.innerText = secRemaining;
  setTimeout(updateCountdown, 1000);
}