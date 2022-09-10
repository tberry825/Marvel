// Source folder creation in Visual Studio Code.
// HTML forms, linking to CSS and JS.
// Use of external resources, such as CSS framework, hash generator, JS library.
// Use of API documentation and applicable keys available at this link.
// Use of Fetch API to request data using an API key.
// Use of async and await to log the data to the console.
// Display specific data to the user.

// Ask a user for a character name, then make an API call to fetch and then display the character's thumbnail, name, and description to the user.

// Click here for the instructions and links to resources to help you sign up for an API key, use async/await and fetch().

// Public: 404dea189e2a99774cfc507849e2269b
// Private: 0c96834adfe5eba4b634ce0f91d904938d72767d
// Hash: 480f4dbeb5b0cb7d7eefeb98fdfbfad6

const getHero = async (e) => {
  e.preventDefault();

  let heroName = $("#name").val();

  let response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroName}&ts=1&apikey=404dea189e2a99774cfc507849e2269b&hash=480f4dbeb5b0cb7d7eefeb98fdfbfad6`
  );
  let data = await response.json();

  console.log(data);

  $(".flex-container").empty();

  data.data.results.map((item) => {
    return $(".flex-container").append(
      `<div class="cards">
        <img
          src="${item.thumbnail.path}.${item.thumbnail.extension}"
          alt="images of ${item.name}"
        />
        <p>${item.name}</p>
        <p>${item.description}</p>
      </div>`
    );
  });
};

$(".button").on("click", function (e) {
  getHero(e);
});
