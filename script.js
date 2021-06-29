console.log("JS here...");

const getData = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

getData(6).then((data) => {
  console.log("Returned data: ", data);
});


