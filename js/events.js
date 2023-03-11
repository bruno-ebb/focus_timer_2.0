
import { 
  playButton,
  pauseButton,
  stopButton,
  plusMinutesButton,
  minusMinutesButton,
  songCards,
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

  
  playButton.addEventListener('click', handlePlay);
  pauseButton.addEventListener('click', handlePause);
  stopButton.addEventListener('click', handleStop);
  plusMinutesButton.addEventListener('click', handleAddMinutes);
  minusMinutesButton.addEventListener('click', handleRemoveMinutes);
}