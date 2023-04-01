const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const searchResults = document.querySelector('#search-results');
const searchContainer = document.querySelector('#search-container');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  // Perform search with searchTerm
  console.log(`Search for: ${searchTerm}`);
});

// Rss feed
