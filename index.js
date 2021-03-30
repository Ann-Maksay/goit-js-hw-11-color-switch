const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

startBtnRef.addEventListener('click', onStartBtn);
stopBtnRef.addEventListener('click', onStopBtn);

let intervalRef = null;
let count = 1;

function onStartBtn(event) {
  startBtnRef.setAttribute('disabled', 'true');

  intervalRef = setInterval(() => {
    if (count < colors.length) {
      document.body.style.background = colors[count];
      console.log(colors[count] + '  count:' + count);
      count++;
      return;
    }
    if (count === colors.length) {
      count = 0;
      document.body.style.background = colors[count];
      console.log(colors[count] + '  count:' + count);
      count++
      return;
    }
    }, 1000)
}

function onStopBtn(event) {
  clearInterval(intervalRef);
  intervalRef = null;
  startBtnRef.removeAttribute('disabled');
}

