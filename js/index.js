const progressWrapper = document.getElementById("progress-wrapper"),
  progress = document.getElementById("progress"),
  timeSpan = document.getElementById("seconds");

// If you want to make a custom circular countdown, you need to edit the object named "options".
// Duration: expects a number && sets the duration of the countdown.
// Transition: expects a string && sets the transition used in the animation. Examples: "linear, ease, ease-in, ease-out, ease-in-out"
// Color: expects a string, && sets the color of the circle. Examples: "#c39fe0, rgb(195, 159, 224), hsl(273deg 51% 75%), hwb(273deg 62% 12%)"
// Size: expects a number && sets the size of the circle.
// InitialPosition: expects a string && sets the countdown initial position. Examples: "right, left, up, down"

const options = {
  duration: 60,
  transition: "linear",
  color: "#c39fe0",
  size: 500,
  initialPosition: "right",
};

const circularCountdown = ({
  duration,
  transition,
  color,
  size,
  initialPosition,
}) => {
  // Rendering countdown on HTML
  renderSeconds(duration);
  // Adjusting timer font-size depending of countdown size
  adjustFontSize(size);
  // Adjusting circular countdown size
  adjustCircleSize(size);
  // Setting initial position of countdown
  setInitialPosition(initialPosition);
  // Starting animation (setting transition, color and duration)
  animationStart(color, transition, duration);
};

const renderSeconds = (duration) => {
  timeSpan.innerHTML = duration;
  const secondsCountdown = setInterval(() => {
    duration--;
    timeSpan.innerHTML = duration;
    if (duration === 0) {
      clearInterval(secondsCountdown);
      timeSpan.innerHTML = `<i class="fa-solid fa-check"></i>`;
    }
  }, 1000);
};

const adjustFontSize = (size) => {
  timeSpan.style.fontSize = `${size / 5}px`;
};

const adjustCircleSize = (size) => {
  progressWrapper.style.width = size;
  progressWrapper.style.height = size;
};

const setInitialPosition = (initialPosition) => {
  if (initialPosition === "up") {
    progressWrapper.style.transform = "rotate(270deg)";
  } else if (initialPosition === "left") {
    progressWrapper.style.transform = "rotate(180deg)";
  } else if (initialPosition === "down") {
    progressWrapper.style.transform = "rotate(90deg)";
  }
};

const animationStart = (color, transition, duration) => {
  let length = progress.getTotalLength();
  progress.style.stroke = color;
  progressWrapper.style.strokeDasharray = length;
  progressWrapper.style.animation = `progress ${transition} ${duration}s forwards`;
};

const init = () => {
  circularCountdown(options);
};

init();
