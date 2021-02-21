const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorChange() {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

function timerHandler(event) {
    switch (event.target.dataset.action) {
        case 'start':
            startBtnRef.disabled = true;
            timer = setInterval(colorChange, 1000);
            break;
        case 'stop':
            startBtnRef.disabled = false;
            clearInterval(timer);
            break;
    }
}

startBtnRef.addEventListener('click', timerHandler);
stopBtnRef.addEventListener('click', timerHandler);