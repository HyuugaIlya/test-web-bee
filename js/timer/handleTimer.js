function handleTimer() {
    let timerBlockInterval;

    const [hBlock, mBlock, sBlock] = [
        document.querySelector('.hours'),
        document.querySelector('.minutes'),
        document.querySelector('.seconds'),
    ]

    const updateTimer = () => {
        if (s <= 9) {
            sBlock.innerText = '0' + s;
        } else {
            sBlock.innerText = s;
        }
        if (m <= 9) {
            mBlock.innerText = '0' + m;
        } else {
            mBlock.innerText = + m;
        }
        if (h <= 9) {
            hBlock.innerText = '0' + h;
        } else {
            hBlock.innerText = h;
        }
    }

    timerBlockInterval = setInterval(updateTimer, 10);

    return () => clearInterval(timerBlockInterval);
};