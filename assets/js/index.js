// Menu toogle and Nav-list 
const menuToogle = document.querySelector(".menu-toggle");
const navList = document.querySelector('.nav-list');

// On click event listener Toogle menu
menuToogle.addEventListener('click', () => {
    navList.classList.toggle('appear');

});

// Search bar height changes accordingly with the content

const searchInput = document.querySelector('.search-bar input');
const searchBar = document.getElementById('search-bar');
const resultsBox = document.querySelector('.results');

searchInput.addEventListener('input', function() {
    searchInput.classList.add('expanded');
    resultsBox.style.display = 'block';

    if (searchInput.value.trim() === '') {
        searchBar.classList.remove('expanded');
        resultsBox.style.display = 'none';
    }

    resultsBox.innerHTML = '';
});


// Fetch the wines Array to the HTML
let wines = [];


fetch('wines.json')
    .then(response => response.json())
    .then(data => {
        wines = data;
});

// Call function to the wine search



function searchWines() {
    const query = document.getElementById('search').value.toLowerCase();
    const resultsBox = document.getElementById('results');
    resultsBox.innerHTML = '';

    if (query.trim() === '') {
        resultsBox.style.display = 'none';
        return;
    }

    const filteredWines = wines.filter(wine => 
        wine.name.toLowerCase().includes(query) ||
        wine.grape.toLowerCase().includes(query) ||
        wine.country.toLowerCase().includes(query) ||
        wine.color.toLowerCase().includes(query)
    );

    if (filteredWines.length > 0) {
        resultsBox.style.display = 'block';
        filteredWines.forEach(wine => {
            const div = document.createElement('div');
            div.classList.add('wine-card');
            div.innerHTML = `<strong>${wine.name}</strong> (${wine.year}) - ${wine.color}, ${wine.country}`;
            div.onclick = function() {
                document.getElementById('search').value = wine.name;
                resultsBox.style.display = 'none';
            };
            resultsBox.appendChild(div);
        });
    } else {
        resultsBox.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    if (!document.querySelector('.search-bar').contains(event.target)) {
        document.getElementById('results').style.display = 'none';
    }
});