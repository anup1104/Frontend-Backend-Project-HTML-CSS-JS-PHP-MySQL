var crsr = document.querySelector("#cursor")
var bk = document.querySelector("#back")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    bk.style.left = dets.x-150+"px"
    bk.style.top = dets.y-150+"px"
})
const modelNames = ["William", "James", "Thomas", "Edward", "Henry", "Charles", "Alexander", "Oliver", "Jack", "Lucas"];

const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Show the search bar when the search icon is clicked
searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('hidden');
    searchInput.focus();
});

// Hide the search bar if clicked outside
document.addEventListener('click', (event) => {
    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
        searchContainer.classList.add('hidden');
    }
});

// Filter and display model names as the user types
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query) {
        const filteredNames = modelNames.filter(name => name.toLowerCase().includes(query));
        filteredNames.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            searchResults.appendChild(li);
        });
    }
});

// Handle click on search results
searchResults.addEventListener('click', (event) => {
    searchInput.value = event.target.textContent;
    searchResults.innerHTML = '';
    searchContainer.classList.add('hidden');
});
