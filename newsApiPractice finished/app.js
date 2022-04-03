const apiUrl =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=5jsNLjbL7zlTiSNbNBhErDxDNi2rPhVi";

let newsArray = [];
let currentPage = 1;

async function getUrlData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const array = data.results;
  const cleanArray = array.filter((obj) => obj.title);
  newsArray = cleanArray;
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

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

window.onload = function () {
  document.getElementById("previousButton").onclick = function () {
    if (currentPage > 1) {
      currentPage = currentPage - 1;
    } else {
      currentPage = 30;
    }
    updateInfo();
  };
  document.getElementById("nextButton").onclick = function () {
    if (currentPage < 30) {
      currentPage = currentPage + 1;
    } else {
      currentPage = 1;
    }
    updateInfo();
  };
};

// // enable this to endlesly loop throu 30 news slides
// function task(profileIndex) {
//   setTimeout(() => {
//     currentPage = profileIndex + 1;
//     task((profileIndex + 1) % 30);
//     updateInfo();
//   }, 500);
// }

// task(0);
// // enable this to endlesly loop throu 30 news slides
