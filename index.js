const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    buttons: document.querySelector('button'),
    body: document.querySelector('body')
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

let currentColor;
function changeColor() {
    currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.body.setAttribute("style", `background-color: ${currentColor}`);
    refs.body.removeAttribute;    
};

let colorInterval;

function onStartClick() {
    colorInerval = setInterval(changeColor, 1000);
    refs.start.disabled = true;
}

function onStopClick() {
    clearInterval(colorInerval);
    refs.body.style.backgroundColor = '#fff';
    refs.start.disabled = false;
}

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);