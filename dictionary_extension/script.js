const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

// Define the API URL with the endpoint and the search term as a query parameter
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Add an event listener to the search button
searchBtn.addEventListener("click", () => {
  // Get the search term from the input field
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Call the API with the search term
  fetch(apiUrl + searchTerm)
    .then(response => response.json())
    .then(data => {
      // Display each meaning on the page
      resultsDiv.innerHTML = "";
      data.forEach(entry => {
        const word = entry.word;
        const meanings = entry.meanings;
        const html = `
          <h2>${word}</h2>
          ${meanings.map(meaning => `
            <div class="card mb-4">
              <div class="card-header">${meaning.partOfSpeech}</div>
              <div class="card-body">
                <p><strong>Definition:</strong> ${meaning.definitions[0].definition}</p>
                ${meaning.definitions[0].example ? `<p><strong>Example:</strong> ${meaning.definitions[0].example}</p>` : ""}
              </div>
            </div>
          `).join("")}
        `;
        resultsDiv.innerHTML += html;
      });
    })
    .catch(error => {
      // Display an error message if the API call fails
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});


// Add an event listener for when the enter key is pressed
searchInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      // Get the search term from the input field
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Call the API with the search term
  fetch(apiUrl + searchTerm)
    .then(response => response.json())
    .then(data => {
      // Display each meaning on the page
      resultsDiv.innerHTML = "";
      data.forEach(entry => {
        const word = entry.word;
        const meanings = entry.meanings;
        const html = `
          <h2>${word}</h2>
          ${meanings.map(meaning => `
            <div class="card mb-4">
              <div class="card-header">${meaning.partOfSpeech}</div>
              <div class="card-body">
                <p><strong>Definition:</strong> ${meaning.definitions[0].definition}</p>
                ${meaning.definitions[0].example ? `<p><strong>Example:</strong> ${meaning.definitions[0].example}</p>` : ""}
              </div>
            </div>
          `).join("")}
        `;
        resultsDiv.innerHTML += html;
      });
    })
    .catch(error => {
      // Display an error message if the API call fails
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
    }
  });