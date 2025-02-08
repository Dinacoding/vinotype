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
    const searchIt = document.getElementById("search");
    const resultsOn = document.getElementById("results");
    resultsOn.innerHTML = '';

    const searchValue = searchIt.value.toLowerCase();

    const findWines = wines.filter(wine => {
        return (
            wine.name.toLowerCase().includes(searchValue) ||
            wine.country.toLowerCase().includes(searchValue)
        );
    });

    // if statement that creates a wine card 
    if (findWines.length > 0) {
        findWines.forEach(wine => {
            const card = document.createElement("div");
            card.classList.add("card-box");
            card.innerHTML = `
                <div class="card-wrapper">
                <h3 class="card-title">${wine.name} (${wine.year})</h3>
                </div>`;
            resultsOn.appendChild(card);
        });
    } else {
        resultsOn.innerHTML = '<p>No wines found.</p>';
    }
}

window.searchWines = searchWines;
