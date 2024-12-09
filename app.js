if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}


// hlavni stranka
function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('setMoviePage').style.display = 'none';

    //zobrazime film pokud je ulozen v session storage
    const favoriteMovie = sessionStorage.getItem('favoriteMovie');
    if (favoriteMovie) {
        document.getElementById('favoriteMovieText').textContent = `Nejoblíbenější film: ${favoriteMovie}`;
    } else {
        document.getElementById('favoriteMovieText').textContent = 'Žádný film nebyl nastaven.';
    }
}



// zobrazeni stranky pro nastaveni filmu
function showSetMoviePage() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('setMoviePage').style.display = 'block';
}



// ulozeni filmu do session storage
function saveMovie() {
    const movieName = document.getElementById('movieInput').value;
    if (movieName) {
        sessionStorage.setItem('favoriteMovie', movieName);
        showMainPage(); //po ulozeni zpet
    } else {
        alert("Prosím, zadejte název filmu.");
    }
}

// zobrazíme hlavní stránku při spusteni
window.onload = function() {
    showMainPage();
};