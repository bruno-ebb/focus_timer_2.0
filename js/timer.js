
import Sounds from "./sounds.js";

export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let idTimeOut;
  let minutes = "25";  

  function addMinutes () {
    minutes = Number(minutesDisplay.textContent);
    minutes = minutes + 5;
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }

  function removeMinutes () {
    minutes = Number(minutesDisplay.textContent);
    if (minutes <= 5) { return };
    minutes = minutes - 5;
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }
  
  function reset() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = "00";
    clearInterval(idTimeOut);
  }

  function hold() {
    clearTimeout(idTimeOut);
  }

  function countdown() {
    idTimeOut = setInterval(function () {

      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      if (isFinished) {
        reset();
        resetControls();
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      minutesDisplay.textContent = String(minutes).padStart(2, "0");
      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    }, 1000);
  }

  

  return {
    addMinutes,
    removeMinutes,
    reset,
    countdown,
    hold
  }
}