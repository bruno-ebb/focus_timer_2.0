
export {
  playButton,
  pauseButton,
  stopButton,
  plusMinutesButton,
  minusMinutesButton,
  songCards,
  forest_Button,
  rain_Button,
  coffeeShop_Button,
  fireplace_Button,
  minutesDisplay,
  secondsDisplay
};

const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
const plusMinutesButton = document.querySelector('#plus');
const minusMinutesButton = document.querySelector('#minus');

const songCards = document.querySelectorAll('.cards');
const forest_Button = document.querySelector('.card1');
const rain_Button = document.querySelector('.card2');
const coffeeShop_Button = document.querySelector('.card3');
const fireplace_Button = document.querySelector('.card4');

const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');