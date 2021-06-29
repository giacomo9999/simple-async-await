console.log("JS here...");

const getPokemon = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((data) => data.json())
    .then((data) => {
      body.innerHTML = `<h1>${data.name}</h1>`;
    });
};

const body = document.querySelector(".content");

getPokemon(5);
