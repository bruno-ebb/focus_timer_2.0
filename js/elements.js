
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
  secondsDisplay,
  switchButton,
  sunIcon,
  moonIcon,
  body,
  sliders,
  forestSlider,
  rainSlider,
  coffeeShopSlider,
  fireplaceSlider
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

const switchButton = document.querySelector('.toggle-light-dark');
const body = document.querySelector('body');
const sunIcon = document.querySelector('.light');
const moonIcon = document.querySelector('.dark');

const sliders = document.querySelectorAll('input[type="range"]');
const forestSlider = document.querySelector('#forest-volume');
const rainSlider = document.querySelector('#rain-volume');
const fireplaceSlider = document.querySelector('#fireplace-volume');
const coffeeShopSlider = document.querySelector('#coffee-volume');