const searchBook = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  const url = `https://openlibrary.org/search.json?q=${searchText}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displaySearchResult(data.docs);

      if (searchText === "") {
        alert("Please write something");
      } else {
        if (data.docs.length > 0) {
          document.getElementById(
            "error-message"
          ).innerHTML = `Total-Result: ${data.num_found}`;
        } else {
          document.getElementById("error-message").innerHTML =
            "No Result Found";
        }
      }
    });
};

const displaySearchResult = (docs) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  docs.forEach((doc) => {
    const div = document.createElement("div");
    // console.log(doc);
    const imageSource = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
          <img src=${imageSource} class="card-img-top" style='height:300px' alt="..." />
          <div class="card-body">
            <h4 class="card-title text-success">book name: ${doc.title}</h4>
            <h6 class="card-title">author name: ${doc.author_name}</h6>
            <h6 class="card-title">publisher: ${doc.publisher}</h6>
            <h6 class="card-title">1st published: ${doc.first_publish_year}</h6>
          </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};
