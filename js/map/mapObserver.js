const mapObserver = new MutationObserver((mutations) => {
    mutations.map(mutation => {
        if (mutation.addedNodes[0].id === 'map-container') {
            initMap();
        }
    })
});

const targetMap = document.querySelector('#main-content');

mapObserver.observe(targetMap, {
    childList: true,
});