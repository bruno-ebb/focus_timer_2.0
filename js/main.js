import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import Sounds from "./sounds.js";
import { 
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
} from "./elements.js";

const controls = Controls({
  playButton,
  pauseButton,
  stopButton,
  songCards,
  plusMinutesButton,
  minusMinutesButton
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.stop
});

const sounds = Sounds();

Events(controls, timer, sounds);