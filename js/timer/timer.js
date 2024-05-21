let timerInterval;
let [h, m, s] = [0, 0, 0];

const startTimer = () => {
    s++;
    if (s > 59) {
        s = 0;
        m++;
    }
    if (m > 59) {
        m = 0;
        h++;
    }
}

window.onload = () => {
    timerInterval = setInterval(startTimer, 1000);

    return () => clearInterval(timerInterval);
}