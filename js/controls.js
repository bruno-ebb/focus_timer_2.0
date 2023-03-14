
export function Controls({
    playButton,
    pauseButton,
    sunIcon,
    moonIcon,
    body
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

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    sunIcon.classList.toggle('hide');
    moonIcon.classList.toggle('hide');
  }

  return {
    play,
    pause,
    stop,
    toggleDarkMode
  }

}