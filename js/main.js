import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import Sounds from "./sounds.js";
import { 
  playButton,
  pauseButton,
  minutesDisplay,
  secondsDisplay,
  sunIcon,
  moonIcon,
  body
} from "./elements.js";

const controls = Controls({
  playButton,
  pauseButton,
  sunIcon,
  moonIcon,
  body
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.stop
});

const sounds = Sounds();

Events(controls, timer, sounds);