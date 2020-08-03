const baseUrl = "https://cat-fact.herokuapp.com";

const getRandomCatFact = () => {
  let url = baseUrl + "/facts/random";
  document.querySelector("#the_fact").innerHTML = "Loading...";

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.text);
      document.querySelector("#the_fact").innerHTML = data.text;
    });
};

// getRandomCatFact();
document.querySelector("#random_btn").addEventListener("click", () => {
  getRandomCatFact();
});
