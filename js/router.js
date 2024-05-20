const route = (e) => {
    e = e || window.event;
    e.preventDefault();

    window.history.pushState({}, '', e.target.href);
    handleLocation();
};

const routes = {
    404: 'pages/404.html',
    '#/activity': 'pages/activity.html',
    '#/map': 'pages/map.html',
    '#/time': 'pages/time.html',
}
const handleLocation = async () => {
    if (!window.location.hash) window.location.hash = '#/activity';
    const path = window.location.hash;

    document.querySelectorAll('.nav__link').forEach((link) => {
        if (link.id === path.split('/')[1]) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    })

    const currentRoute = routes[path] || routes[404];
    const html = await fetch(currentRoute).then(data => data.text());
    document.querySelector('#main-content').innerHTML = html;
};

window.onhashchange = handleLocation;

handleLocation();