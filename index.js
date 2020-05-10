const body = document.querySelector("body");
const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = () => {
  const getRandomIndex = randomIntegerFromInterval(0, colors.length - 1);
  return colors[getRandomIndex];
};

let bodyColor;

const colorSwitchStart = () => {
  bodyColor = setInterval(() => {
    const bodyColor = getRandomColor();
    body.style.background = bodyColor;
    buttonStartRef.disabled = true;
  }, 1000);
};
const colorSwitchStop = () => {
  clearInterval(bodyColor);
  buttonStartRef.disabled = false;
};

buttonStartRef.addEventListener("click", colorSwitchStart);
buttonStopRef.addEventListener("click", colorSwitchStop);