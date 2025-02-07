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


fetch('wines.json')
.then(response => response.json())
.then(data => {
    const wines = data;

    function searchWines(){
        const searchIt = document.getElementById("serach");
        const resultsOn = document.getElementById("results");
        resultsOn.innerHTML = '';

        
    }
})
results.innerHTML = searchResult; 

module.exports = { toggleMenu, searchBar };