let isLoaded = false;
function handleMap() {
    if (!isLoaded) {
        [
            'https://api-maps.yandex.ru/v3/?apikey=b3509552-3847-4227-b137-a69a806554f7&lang=ru_RU',
            'js/initMap.js',
            'js/observer.js'
        ].map((src, i) => {
            let script = document.createElement('script');
            script.id = `map${i + 1}`
            script.src = src
            script.defer = true;
            script.async = false;

            document.head.appendChild(script)
        });
        isLoaded = true;
    }
}