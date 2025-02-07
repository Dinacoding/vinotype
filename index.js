// Menu toogle and Nav-list 
const menuToogle = document.querySelector(".menu-toggle");
const navList = document.querySelector('.nav-list');

// On click event listener Toogle menu
menuToogle.addEventListener('click', () => {
    navList.classList.toggle('appear');

});

// Example: Displaying a search result
const resultsBox = document.querySelector('.results');
const searchResult = "Your search results here.";


let wines = [];


fetch('wines.json')
    .then(response => response.json())
    .then(data => {
        wines = data;
    });

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

    if (findWines.length > 0) {
        findWines.forEach(wine => {
            const card = document.createElement("div");
            card.classList.add("card-box");
            card.innerHTML = `
                <div class="card-wrapper">
                <h3 class="card-title">${wine.name} (${wine.year})</h3>
                    <p class="card-text">${wine.grape} - ${wine.country}</p>
                    <p class="card-text">${wine.description}</p>
                </div>`;
            resultsOn.appendChild(card);
        });
    } else {
        resultsOn.innerHTML = '<p>No wines found.</p>';
    }
}

window.searchWines = searchWines;
