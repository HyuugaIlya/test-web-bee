const timerObserver = new MutationObserver((mutations) => {
    mutations.map(mutation => {
        if (mutation.addedNodes[0].id === 'timer-container') {
            handleTimer();
        }
    })
});

const targetTimer = document.querySelector('#main-content');

timerObserver.observe(targetTimer, {
    childList: true,
});