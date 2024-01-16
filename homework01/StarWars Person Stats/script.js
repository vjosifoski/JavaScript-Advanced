let fetchButton = document.getElementById("fetchButton");
let result = document.getElementById("result");

function printPersonName(resultElement, name) {
  let resultTitle = resultElement.getElementsByTagName("h1")[0];
  resultTitle.innerText = name;
}

function printPersonStats(resultElement, stats) {
  let resultList = resultElement.getElementsByTagName("ul")[0];
  resultList.innerHTML = "";
  for (let statKey in stats) {
    resultList.innerHTML += `<li>${statKey}: ${stats[statKey]}</li>`;
  }
}

fetchButton.addEventListener("click", function () {
  fetch("https://swapi.dev/api/people/1/")
    .then(function (response) {
      return response.json();
    })
    .then(function (person) {
      printPersonName(result, person.name);
      printPersonStats(result, {
        Height: person.height,
        Weight: person.mass,
        "Eye Color": person.eye_color,
        "Hair Color": person.hair_color,
      });
    })
    .catch(function (error) {
      console.error("Error fetching data: ", error);
    });
});
