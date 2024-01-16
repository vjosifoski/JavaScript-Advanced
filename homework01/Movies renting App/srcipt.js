let movies = [
  "The Godfather",
  "Forrest Gump",
  "Inception",
  "The Matrix",
  "Gladiator",
];

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("searchButton")
    .addEventListener("click", searchMovie);
});

function searchMovie() {
  let input = document.getElementById("movieInput").value.toLowerCase();
  let result = document.getElementById("result");
  let found = false;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].toLowerCase() === input) {
      found = true;
      break;
    }
  }

  if (found) {
    result.textContent = "Филмот може да се изнајми";
    result.style.color = "green";
    result.className = "available";
  } else {
    result.textContent = "Филмот не може да се изнајми";
    result.style.color = "red";
    result.className = "unavailable";
  }
}
