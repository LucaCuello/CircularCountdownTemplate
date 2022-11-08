const progressWrapper = document.getElementById("progress-wrapper"),
  progress = document.getElementById("progress"),
  timeSpan = document.getElementById("seconds");

const circularCountdown = (
  seconds = 60,
  animationTransition = "linear",
  color = "#c39fe0",
  size = 500
) => {
  // Rendering the seconds on screen
  let time = seconds;
  timeSpan.innerHTML = seconds;
  const secondsCountdown = setInterval(() => {
    time--;
    renderSeconds(time);
    if (time === 0) {
      clearInterval(secondsCountdown);
    }
  }, 1000);
  //   Adjusting timer font-size depending of countdown size
  timeSpan.style.fontSize = `${size / 5}px`;
  //   Adjusting the circle size
  progressWrapper.style.width = size;
  progressWrapper.style.height = size;
  //  Making our circular countdown work
  let length = progress.getTotalLength();
  progress.style.stroke = color;
  progressWrapper.style.strokeDasharray = length;
  progressWrapper.style.animation = `progress ${animationTransition} ${seconds}s forwards`;
};

const renderSeconds = (seconds) => {
  timeSpan.innerHTML = seconds;
  if (seconds === 0) {
    timeSpan.innerHTML = `
    <i class="fa-solid fa-check"></i>
    `;
  }
};

const init = () => {
  circularCountdown();
  //   Function parameters: SECONDS, expects a NUMBER so it can make the countdown work, by default it's 60 seconds. ANIMATIONTRANSITION, LINEAR by default, expects a STRING with a transition name such as: linear, ease, ease-in, ease-out, ease-in-out. COLOR, #c39fe0 by default. Expects a STRING with a valid color code (HEX, RGB, HSL). SIZE: 500x500 by default. Expects a single number for both width and height.
  //   Knowing this, a custom 200x200 10s ease orange circular countdown would look like circularCountdown(10, "ease", "#FC6949", 200)
};

init();
