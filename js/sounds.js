
import { 
  forestSlider,
  rainSlider,
  coffeeShopSlider,
  fireplaceSlider
 } from "./elements.js";

export default function () {

  const bgForestAudio = new Audio("assets/sounds/Floresta.wav");
  const bgRainAudio = new Audio("assets/sounds/Chuva.wav");
  const bgCoffeeShopAudio = new Audio("assets/sounds/Cafeteria.wav");
  const bgFireplaceAudio = new Audio("assets/sounds/Lareira.wav");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

  
  const timeEnd = () => {
    kitchenTimer.play();
  }
  
  const stopSounds = (sound1, sound2, sound3) => {
    sound1.pause();
    sound2.pause();
    sound3.pause();
  }

  const playForest = () => {
    bgForestAudio.play()
    bgForestAudio.loop = true;
    stopSounds(
      bgRainAudio,
      bgCoffeeShopAudio,
      bgFireplaceAudio
    );
  }
  const playRain = () => {
    bgRainAudio.play()
    bgRainAudio.loop = true;
    stopSounds(
      bgForestAudio,
      bgCoffeeShopAudio,
      bgFireplaceAudio
    );
  }
  const playCoffeeShop = () => {
    bgCoffeeShopAudio.play()
    bgCoffeeShopAudio.loop = true;
    stopSounds(
      bgRainAudio,
      bgForestAudio,
      bgFireplaceAudio
    );
  }
  const playFireplace = () => {
    bgFireplaceAudio.play()
    bgFireplaceAudio.loop = true;
    stopSounds(
      bgRainAudio,
      bgCoffeeShopAudio,
      bgForestAudio
    );
  }
  
  const pauseForest = () => {
    bgForestAudio.pause();
  }
  const pauseRain = () => {
    bgRainAudio.pause();
  }
  const pauseCoffeeShop = () => {
    bgCoffeeShopAudio.pause();
  }
  const pauseFireplace = () => {
    bgFireplaceAudio.pause();
  }

  const playAudio = (card) => {
    const className = card.className
    switch (true) {
      case className.includes('forest'):
        playForest();
        break;
      case className.includes('rain'):
        playRain();
        break;
      case className.includes('coffee-shop'):
        playCoffeeShop();
        break;
      case className.includes('fireplace'):
        playFireplace();
        break;
    }
  }

  const pauseAudio = (card) => {
    const className = card.className
    switch (true) {
      case className.includes('forest'):
        pauseForest();
        break;
      case className.includes('rain'):
        pauseRain();
        break;
      case className.includes('coffee-shop'):
        pauseCoffeeShop();
        break;
      case className.includes('fireplace'):
        pauseFireplace();
        break;
    }
  }

  const forestVolume = () => {
    bgForestAudio.volume = forestSlider.value / 100;
  }
  const rainVolume = () => {
    bgRainAudio.volume = rainSlider.value / 100;
  }
  const coffeeShopVolume = () => {
    bgCoffeeShopAudio.volume = coffeeShopSlider.value / 100;
  }
  const fireplaceVolume = () => {
    bgFireplaceAudio.volume = fireplaceSlider.value / 100;
  }

  return {
    timeEnd,
    playAudio,
    pauseAudio,
    forestVolume,
    rainVolume,
    coffeeShopVolume,
    fireplaceVolume
  }

}