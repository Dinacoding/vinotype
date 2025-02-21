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

let wines = [];


// Fetch wine data on the wines.json
fetch('wines.json')
    .then(response => response.json())
    .then(data => {
        wines = data;
        console.log(wines); 

        searchInput.addEventListener('input', searchWines);
        searchButton.addEventListener('click', searchWines);
    })
    
    .catch(error => {
        console.error("Error fetching wine data:", error);
    });
   

function searchWines() {
    const query = searchInput.value.toLowerCase(); // Get value from INPUT
    resultsBox.innerHTML = '';

    if (query.trim() === '') {
        resultsBox.style.display = 'none';
        searchBar.classList.remove('expanded');
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
        searchBar.classList.add('expanded');
        filteredWines.forEach(wine => {
            const li = document.createElement('li');
            li.classList.add('wine-card');
            li.innerHTML = `<strong>${wine.name}</strong> (${wine.year}) - ${wine.color}, ${wine.country}`;
            li.onclick = () => {
                searchInput.value = wine.name;
                resultsBox.style.display = 'none';
                searchBar.classList.remove('expanded');
            };
            resultsBox.appendChild(li);
        });
    } else {
        resultsBox.style.display = 'none';
        searchBar.classList.remove('expanded');
    }
}

document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target)) {
        resultsBox.style.display = 'none';
        searchBar.classList.remove('expanded');
    }
});