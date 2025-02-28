// Menu toogle and Nav-list 
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('appear');
    console.log("Menu toggled!"); // Log when menu is toggled
});

//Search bar height changes accordingly with the content

// Wine Search
const searchInput = document.getElementById('search');
const resultsBox = document.getElementById('results');
const searchBar = document.querySelector('.search-bar');
const searchButton = document.getElementById('btn')
const clearButton = document.getElementById('clear-button')
const wineContainer = document.getElementById('wine-container')

let wines = [];


// Fetch wine data on the wines.json
fetch('wines.json')
    .then(response => response.json())
    .then(data => {
        wines = data;
        console.log(wines); 

        searchInput.addEventListener('input', searchWines);
        searchButton.addEventListener('click', displayWineCard);
    })
    
    .catch(error => {
        console.error("Error fetching wine data:", error);
    });
   

clearButton.addEventListener("click", () => {
    searchInput.value = '';
    resultsBox.innerHTML = '';
    resultsBox.style.display = "none";
    searchBar.classList.remove('expanded');
});

function searchWines() {
    console.log("Search button clicked!")
    const query = searchInput.value.toLowerCase(); // Get value from INPUT
    resultsBox.innerHTML = '';

    if (query.trim() === '') {
        resultsBox.style.display = 'none';
        searchBar.classList.remove('expanded');
        return searchBar;
    }

    const filteredWines = wines.filter(wine =>
        wine.name.toLowerCase().includes(query) ||
        wine.grape.toLowerCase().includes(query) ||
        wine.country.toLowerCase().includes(query) ||
        wine.color.toLowerCase().includes(query)
    );

    if (filteredWines.length > 0) {
        resultsBox.style.display = 'block';
        searchBar.classList.add('expanded');
        filteredWines.forEach(wine => {
            const li = document.createElement('li');
            li.classList.add('wine-list');
            li.innerHTML = `<strong>${wine.name}</strong> (${wine.year}) - ${wine.color}, ${wine.country}`;
            li.onclick = () => {
                searchInput.value = wine.name;
                resultsBox.style.display = 'none';
                searchBar.classList.remove('expanded');
                displayWineCard(wine);
            };
            resultsBox.appendChild(li);
        });
    } else {
        resultsBox.style.display = 'block';
        searchBar.classList.remove('expanded');
        resultsBox.innerHTML = '';

        const li = document.createElement('li');
        li.classList.add('wine-card', 'not-found');
        li.innerHTML = `<strong>Wine not found!</strong> Try another search.`
        li.style.color = "red";


        resultsBox.appendChild(li);

    }
}
//Display Wine Card function
function displayWineCard(wine) {
    console.log(wine);
    searchInput.value = wine.name;
    resultsBox.style.display = 'none';
    searchBar.classList.remove('expanded');
    wineContainer.innerHTML = ''; 

    const wineCard = document.createElement('div');
    wineCard.classList.add('wine-card');
    wineCard.innerHTML = `
     <h2>${wine.name}</h2>
        <p><strong>Year:</strong> ${wine.year} - <strong>Color:</strong> ${wine.color}, <strong>Country:</strong> ${wine.country}</p>
        <h3>Tasting Notes</h3>
        <p>${wine.description}</p>
        <p>${wine.tastingNotes}</p>
        <h3>Sommelier Pairing Suggestions</h3>
        <p>${wine.pairingSuggestions}</p>`

        wineContainer.appendChild(wineCard);

    console.log(wineCard);
}
searchInput.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
        const searchTerm = searchInput.value.toLowerCase();
        const foundWine = wines.find(w => w.name.toLowerCase() === searchTerm);

        console.log(searchTerm);
        console.log(foundWine);

        if (foundWine) {
            console.log("Wine found:", foundWine);
            console.log("Wine Name:", foundWine.name);
            console.log("Wine Grape:", foundWine.grape);
            displayWineCard(foundWine);
        } else {
            console.log("Wine not found for search term:", searchTerm);
        }
    } else {
        console.log("Search input is empty.");
    }
});

document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target)) {
        resultsBox.style.display = 'none';
        searchBar.classList.remove('expanded');
    }
});

