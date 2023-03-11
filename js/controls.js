
export function Controls({
    playButton,
    pauseButton,
    stopButton,
    plusMinutesButton,
    minusMinutesButton,
}) {
  
  function play() {
    playButton.classList.add('hide');
    pauseButton.classList.remove('hide');
  };

  function pause() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
  }

  function stop() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
  }


  return {
    play,
    pause,
    stop,
  }

}