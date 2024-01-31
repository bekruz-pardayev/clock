const dayTop = document.querySelector(".day-top"),
  dayBottom = document.querySelector(".day-bottom"),
  hourTop = document.querySelector(".hour-top"),
  hourBottom = document.querySelector(".hour-bottom"),
  minutesTop = document.querySelector(".minutes-top"),
  minutesBottom = document.querySelector(".minutes-bottom"),
  secondTop = document.querySelector(".second-top"),
  secondBottom = document.querySelector(".second-bottom");
function clock() {
  const date = new Date();
  dayTop.textContent = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  dayBottom.textContent =
    date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  hourTop.textContent = date.getHours();
  hourBottom.textContent = date.getHours();
  minutesTop.textContent =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  minutesBottom.textContent =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  secondTop.textContent =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  secondBottom.textContent =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
}
clock();
setInterval(clock, 1000);
