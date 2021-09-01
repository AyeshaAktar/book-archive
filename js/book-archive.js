const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;

    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h4 class="card-title">${doc.title}</h4>
            <h6 class="card-title">${doc.author_name}</h6>
            <h6 class="card-title">${doc.publisher}</h6>
            <h6 class="card-title">${doc.first_publish_year}</h6>
            // <p class="card-text">
            //   This is a longer card with supporting text below as a natural
            //   lead-in to additional content. This content is a little bit
            //   longer.
            // </p>
          </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}