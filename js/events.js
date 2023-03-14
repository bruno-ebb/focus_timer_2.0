
import { 
  playButton,
  pauseButton,
  stopButton,
  plusMinutesButton,
  minusMinutesButton,
  songCards,
  switchButton,
  sliders,
  forestSlider,
  rainSlider,
  coffeeShopSlider,
  fireplaceSlider
} from "./elements.js";

export function Events(controls, timer, sounds) {
  
  const handlePlay = () => {
    controls.play();
    timer.countdown();
  }

  const handlePause = () => {
    controls.pause();
    timer.hold();
  }

  const handleStop = () => {
    controls.stop();
    timer.reset();
  }

  const handleAddMinutes = () => {
    timer.addMinutes();
  }

  const handleRemoveMinutes = () => {
    timer.removeMinutes();
  }
  
  const handleSwitchMode = () => {
    controls.toggleDarkMode();
  }

  songCards.forEach(card => {
    card.addEventListener('click', () => {

      const isClicked = card.classList.contains('clicked');
      card.classList.toggle('clicked');
      sounds.playAudio(card);
      if (isClicked) {
        sounds.pauseAudio(card);
      }

      songCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('clicked');
          sounds.pauseAudio(otherCard);
        }
      });
    });
  });

  sliders.forEach(slider => {
    slider.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });


  const handleForestVolume = () => {
    sounds.forestVolume();
  }
  const handleRainVolume = () => {
    sounds.rainVolume();
  }
  const handleCoffeeShopVolume = () => {
    sounds.coffeeShopVolume();
  }
  const handleFireplaceVolume = () => {
    sounds.fireplaceVolume();
  }

  
  playButton.addEventListener('click', handlePlay);
  pauseButton.addEventListener('click', handlePause);
  stopButton.addEventListener('click', handleStop);
  plusMinutesButton.addEventListener('click', handleAddMinutes);
  minusMinutesButton.addEventListener('click', handleRemoveMinutes);
  switchButton.addEventListener('click', handleSwitchMode);
  forestSlider.addEventListener('input', handleForestVolume);
  rainSlider.addEventListener('input', handleRainVolume);
  coffeeShopSlider.addEventListener('input', handleCoffeeShopVolume);
  fireplaceSlider.addEventListener('input', handleFireplaceVolume);
}