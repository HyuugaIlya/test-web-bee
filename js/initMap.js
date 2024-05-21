initMap();

async function initMap() {
    await ymaps3.ready;

    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker
    } = ymaps3;

    const map = new YMap(
        document.getElementById('map-content'),

        {
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            }
        },
        [
            new YMapDefaultSchemeLayer({}),
            new YMapDefaultFeaturesLayer({})
        ]
    );

    const markerElement = document.createElement('div');
    markerElement.className = 'marker-class';
    markerElement.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00" /></svg>`;

    map.addChild(new YMapMarker({ coordinates: [37.588144, 55.733842] }, markerElement));

    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}