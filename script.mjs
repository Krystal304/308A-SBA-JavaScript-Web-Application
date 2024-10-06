
// const url = "https://api.thedogapi.com/v1/images/search?limit=10"

// const url = `https://api.thedogapi.com/v1/images/search?limit=10&${breed_ids}=beng&api_key=api`

// const api = `live_s1x3sj6JjCeyIG0l4zoGHjW3LOU90I4DfhT8jRh4UQqDHg1aJnMysCROeZVFnO2Y`

const fact = document.getElementById('fact');

let button = document.getElementById('generate-btn');

const apiKey =`fspCEHpH8szOjg/OLOE3aQ==jICsqy0ebnfoNLkD`


let options = {
    method: "GET",
    headers: {"x-api-key": apiKey},
};


const url = `https://api.api-ninjas.com/v1/facts?`;


let generateQuote = () => {
  fetch(url, options)
  .then((response) => response.json())
    .then((data) => {
    console.log(data[0].fact);
    fact.innerHTML = data[0].fact;  
    });
};

button.addEventListener('click', generateQuote);

window.addEventListener('load', generateQuote);


