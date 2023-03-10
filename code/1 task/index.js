const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const formatNumToText = (num) => {
  if(num < 10){
    return '0' + num
  } else return num
}

const createTimerAnimator = (seconds) => {
  let time = seconds

  let timerId = setInterval(() => {
    let tymerHours = Math.floor(time / 3600)
    let tymerMinutes = Math.floor(time / 60) % 60
    let timerSeconds = time % 60

    timerEl.textContent = `${formatNumToText(tymerHours)}:${formatNumToText(tymerMinutes)}:${formatNumToText(timerSeconds)}`
    time--

    if(time < 0) {
      timerEl.innerHTML = `Время вышло: 00:00:00`
      clearTimeout(timerId)
    }
  }, 1000);

};

inputEl.addEventListener('input', (e) => {
  inputEl.value = e.target.value.replace(/[^\d.]/g, '')
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  createTimerAnimator(seconds);

  inputEl.value = '';
});