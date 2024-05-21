const observer = new MutationObserver((mutations) => {
    mutations.map(mutation => {
        if (mutation.addedNodes[0].id === 'map-container') {
            initMap();
        }
    })

});

const target = document.querySelector('#main-content');

observer.observe(target, {
    childList: true,
});