// Menu toogle and Nav-list 
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("appear");
    console.log("Menu toggled!"); // Log when menu is toggled
});

//Search bar height changes accordingly with the content



/// Wine Search
const searchInput = document.getElementById("search");
const resultsBox = document.getElementById("results");
const searchBar = document.querySelector(".search-bar");
const searchButton = document.getElementById("btn");
const clearButton = document.getElementById("clear-button");
const wineContainer = document.getElementById("wine-container");

let wines = [];

// Fetch wine data from the wines.json
fetch("wines.json")
    .then(response => response.json())
    .then(data => {
        wines = data;
        console.log("Wines loads", wines)
    })
    .catch(error => {
        console.error("Error fetching wine data:", error);
    });

searchButton.addEventListener("click", displayWinesCards);


clearButton.addEventListener("click", () => {
    searchInput.value = "";
    resultsBox.innerHTML = "";
    resultsBox.style.display = "none";
    searchBar.classList.remove("expanded");
});

// Function to perform the wine search
function searchWines() {
    console.log("Search button clicked!");
    const query = searchInput.value.toLowerCase(); 
    resultsBox.innerHTML = ""; 

    // If query is empty, hide the results and remove "expanded" class
    if (query.trim() === "") {
        resultsBox.style.display = "none";
        searchBar.classList.remove("expanded");
        return;
    }

    // Filter wines based on query
    const filteredWines = wines.filter(
        (wine) =>
            wine.name.toLowerCase().includes(query) ||
            wine.grape.toLowerCase().includes(query) ||
            wine.country.toLowerCase().includes(query) ||
            wine.color.toLowerCase().includes(query)
    );

    // Expand search bar and show results if filtered wines exist
    resultsBox.style.display = "block";
    searchBar.classList.add("expanded");

    if (filteredWines.length > 0) {
        filteredWines.forEach(wine => {
            const li = document.createElement("li");
            li.classList.add("wine-list");
            li.innerHTML = `<strong>${wine.name}</strong> (${wine.year}) - ${wine.color}, ${wine.country}`;
            li.onclick = () => {
                displayWineCard(wine);
                resultsBox.style.display = "none";
                searchBar.classList.remove("expanded");
            };
            resultsBox.appendChild(li);
        });
    } else {
        // If no wines match the query, show a "Wine not found" message
        const notFoundMessage = document.createElement("li");
        notFoundMessage.classList.add("wine-card", "not-found");
        notFoundMessage.style.color = "red";
        notFoundMessage.innerHTML = `<strong>Wine not found!</strong> Try another search.`;
        resultsBox.appendChild(notFoundMessage);
    }
}

function displayWinesCards(wine) {
    console.log("Display Wine Card", wine);

    if (!wine) {
        console.error("No wine data provided");
        return;
    }

    const wineCard = document.createElement("div");
    wineCard.classList.add("wine-card");
    wineCard.innerHTML = `
        <button class="close-button">&times;</button> 
        <div class="card-image">
            <img src="${wine.image}" alt="${wine.alt}">
        </div>
        <aside>
            <h2>${wine.name}</h2>
            <p><strong>Year:</strong> ${wine.year} - <strong>Color:</strong> ${wine.color}, 
            <strong>Country:</strong> ${wine.country}</p>
            <h3>Tasting Notes</h3>
            <p>${wine.description}</p>
            <p>${wine.tastingNotes}</p>
            <h3>Sommelier Pairing Suggestions</h3>
            <p>${wine.pairingSuggestions}</p>
        </aside>
    `;

    wineContainer.hidden = false;
    wineContainer.appendChild(wineCard);

    // Add close button functionality
    const closeButton = wineCard.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        wineCard.remove();
    });
}

function closeWineCard() {
    console.log("Closing wine card...");
    wineContainer.hidden = true;
    wineContainer.innerHTML =""; 
}

function showNotFoundMessage() {
    wineContainer.innerHTML = `<p style="color: red;">
    <strong>Wine not found.
    </strong> Try another search.</p>`;
}

// Handle clicks inside the search input to directly display a wine card
searchInput.addEventListener("input", () => {
    console.log("Typing detected:", searchInput.value);
    searchWines();
});

searchInput.addEventListener("click", () => {
    if (searchInput.value.trim() !== "") {
        const searchTerm = searchInput.value.toLowerCase();
        const foundWine = wines.find(w => w.name.toLowerCase() === searchTerm);

        if (foundWine) {
            displayWineCard(foundWine);
        } else {
            console.log("Wine not found for search term:", searchTerm);
        }
    }
});


// Close results box when clicking outside of the search bar

resultsBox.addEventListener("click", (event) => {
    if (event.target.classList.contains("wine-list")) {
        const wineName = event.target.dataset.name;
        const foundWine = wines.find((w) => w.name === wineName);
        if (foundWine) displayWineCard(foundWine);
    }
});
//
document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target)) {
        resultsBox.style.display = "none";
        searchBar.classList.remove("expanded");
    }
});

