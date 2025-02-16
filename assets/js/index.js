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
let wines = [];


// Fetch wine data on the wines.json
fetch('wines.json')
    .then(response => response.json())
    console.log(data);
    /*
            .then(data => {
                wines = data;
            });

        searchInput.addEventListener('input', searchWines);

        function searchWines() {
            const query = searchInput.value.toLowerCase();
            resultsBox.innerHTML = '';

            if (query.trim() === '') {
                resultsBox.style.display = 'none';
                searchBar.classList.remove('expanded'); // Remove expanded class
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
                searchBar.classList.add('expanded'); // Add expanded class
                filteredWines.forEach(wine => {
                    const li = document.createElement('li'); // Use <li> for results
                    li.classList.add('wine-card');
                    li.innerHTML = `<strong>${wine.name}</strong> (${wine.year}) - ${wine.color}, ${wine.country}`;
                    li.onclick = function() {
                        searchInput.value = wine.name;
                        resultsBox.style.display = 'none';
                        searchBar.classList.remove('expanded'); // Remove expanded class
                    };
                    resultsBox.appendChild(li);
                });
            } else {
                resultsBox.style.display = 'none';
                searchBar.classList.remove('expanded'); // Remove expanded class
            }
        }

        document.addEventListener('click', function(event) {
            if (!searchBar.contains(event.target)) {
                resultsBox.style.display = 'none';
                searchBar.classList.remove('expanded'); // Remove expanded class
            }
        });*/
