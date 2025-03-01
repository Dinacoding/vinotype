// Menu toogle and Nav-list 
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('appear');
    console.log("Menu toggled!"); // Log when menu is toggled
});

//Search bar height changes accordingly with the content

/// Wine Search
const searchInput = document.getElementById('search');
const resultsBox = document.getElementById('results');
const searchBar = document.querySelector('.search-bar');
const searchButton = document.getElementById('btn');
const clearButton = document.getElementById('clear-button');
const wineContainer = document.getElementById('wine-container');

let wines = [];

// Fetch wine data from the wines.json
fetch('wines.json')
    .then(response => response.json())
    .then(data => {
        wines = data;
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

// Function to perform the wine search
function searchWines() {
    console.log("Search button clicked!");
    const query = searchInput.value.toLowerCase(); // Get value from INPUT
    resultsBox.innerHTML = '';

    if (query.trim() === '') {
        resultsBox.style.display = 'none';
        searchBar.classList.remove('expanded');
        return;
    }

    const filteredWines = wines.filter(
        (wine) =>
        wine.name.toLowerCase().includes(query) ||
        wine.grape.toLowerCase().includes(query) ||
        wine.country.toLowerCase().includes(query) ||
        wine.color.toLowerCase().includes(query)
    );

    resultsBox.style.display = "block";          // Expand search bar when results are found
    searchBar.classList.add("expanded");

    if (filteredWines.length > 0) {
        filteredWines.forEach(wine => {
            const li = document.createElement('li');
            li.classList.add('wine-list');
            li.innerHTML = `<strong>${wine.name}</strong> (${wine.year}) - ${wine.color}, ${wine.country}`;
            li.onclick = () => {
                searchInput.value = wine.name;
                resultsBox.style.display = 'none';
                searchBar.classList.remove('expanded');
            };
            resultsBox.appendChild(li);
        });
    } else {
        resultsBox.style.display = 'block';
        searchBar.classList.remove('expanded');
        resultsBox.innerHTML = '';

        const li = document.createElement('li');
        li.classList.add('wine-card', 'not-found');
        li.innerHTML = `<strong>Wine not found!</strong> Try another search.`;
        li.style.color = "red";

        resultsBox.appendChild(li);
    }
}
function displayWineOnButtonClick() {
    console.log("Search button clicked!");

    const query = searchInput.value.toLowerCase();
    if (query.trim() === '') {
        console.log("No search input provided.");
        return;
    }

    const foundWine = wines.find(w => w.name.toLowerCase() === query);

    if (foundWine) {
        displayWineCard(foundWine);
    } else {
        console.log("No wine found with that name.");
        wineContainer.innerHTML = `<p style="color: red;"><strong>Wine not found.</strong> Try another search.</p>`;
    }
}
// Function to display the wine card
function displayWineCard(wine) {
    console.log(wine); // Check if wine is correctly passed
    if (!wine) {
        console.error('No wine data provided');
        return; // If no wine data, don't proceed
    }

    searchInput.value = wine.name;
    resultsBox.style.display = 'none';
    searchBar.classList.remove('expanded');
    wineContainer.innerHTML = ''; // Clear the container before appending the new card

    const wineCard = document.createElement('div');
    wineCard.classList.add('wine-card');
    wineCard.innerHTML = `
     <h2>${wine.name}</h2>
        <p><strong>Year:</strong> ${wine.year} - <strong>Color:</strong> ${wine.color}, <strong>Country:</strong> ${wine.country}</p>
        <h3>Tasting Notes</h3>
        <p>${wine.description}</p>
        <p>${wine.tastingNotes}</p>
        <h3>Sommelier Pairing Suggestions</h3>
        <p>${wine.pairingSuggestions}</p>`;

    wineContainer.appendChild(wineCard);
    console.log(wineCard); 
}
function showNotFoundMessage() {
    wineContainer.innerHTML = `<p style="color: red;"><strong>Wine not found.</strong> Try another search.</p>`;
}

// Handle clicks inside the search input to directly display a wine card
searchInput.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
        const searchTerm = searchInput.value.toLowerCase();
        const foundWine = wines.find(w => w.name.toLowerCase() === searchTerm);

        if (foundWine) {
            displayWineCard(foundWine);
        } else {
            console.log("Wine not found for search term:", searchTerm);
        }
    }
});

searchInput.addEventListener("input", searchWines); 
searchButton.addEventListener("click", displayWineOnButtonClick); 

// Close results box when clicking outside of the search bar

resultsBox.addEventListener("click", (event) => {
    if (event.target.classList.contains("wine-list")) {
        const wineName = event.target.dataset.name;
        const foundWine = wines.find((w) => w.name === wineName);
        if (foundWine) displayWineCard(foundWine);
    }
});

document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target)) {
        resultsBox.style.display = 'none';
        searchBar.classList.remove('expanded');
    }
});

