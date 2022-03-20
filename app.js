const apiUrl =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=5jsNLjbL7zlTiSNbNBhErDxDNi2rPhVi";

let newsArray = [];
let currentPage = 1;

async function getUrlData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const array = data.results;
  array.shift();
  array.shift();
  newsArray = array;
  updateInfo();
}
getUrlData();

function updateInfo() {
  document.getElementById("img").src = newsArray[currentPage].multimedia[1].url;
  document.getElementById("title").textContent = newsArray[currentPage].title;
  document.getElementById("description").textContent =
    newsArray[currentPage].abstract;
  document.getElementById("url").href = newsArray[currentPage].short_url;
}
for (let i = 1; i <= 21; i++) {
  task(i);
}

function task(i) {
  setTimeout(function () {
    currentPage = i;
    updateInfo();
  }, 4000 * i);
}
// function nextSlide() {
//   currentPage = currentPage + 1;
//   updateInfo();
// }

// document.getElementById("nextButtom").onclick = nextSlide();
