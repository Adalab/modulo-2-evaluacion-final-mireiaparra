"use strict";
const allList = document.querySelector(".js-allCharactersList");
const favList = document.querySelector(".js-favCharactersList")
const favSection = document.querySelector(".js-favSection");
const searchBtn = document.querySelector(".js-searchBtn");
const searchInput = document.querySelector(".js-searchInput");
const container = document.querySelector(".js-main");



"use strict";
function handleClick(ev) {
    ev.preventDefault;

    const searchCharactersName = characters.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    const searchCharactersStatus = characters.filter((eachCharacter) => eachCharacter.status.toLowerCase().includes(searchInput.value.toLowerCase()));

    let filteredCharacters = searchCharactersName.concat(searchCharactersStatus);

    allList.innerHTML = "";
    paintCharacters(filteredCharacters, allList);
    }


searchBtn.addEventListener('click', handleClick);
"use strict";
let favCharacters = [];

function paintFav(ev){
    let favElement =  ev.target.parentElement;
    // favElement.classList.toggle("fav");

    const findFav = characters.find((eachFav) => eachFav.char_id == parseInt(favElement.id));
   
    favCharacters.push(findFav);
    favList.innerHTML = '';
    favSection.classList.remove("hidden");
    paintCharacters(favCharacters, favList, "fav");
    styleFav();
    setLocalSt();
}

 
// function hideFav(){
//     if (favCharacters == []) {
//         favSection.classList.add("hidden");
// }
// }

function styleFav(){
    container.classList.add("main");
    const favArticles = document.querySelectorAll(".fav");
    console.log(favArticles);
    for (const favArticle of favArticles) {
        const removeFav = document.createElement("button");
        const removeFavText = document.createTextNode("X");
        removeFav.appendChild(removeFavText);
        favArticle.appendChild(removeFav);
    }
}

function handleClickFav(ev) {
    ev.preventDefault;
   paintFav(ev);
}

allList.addEventListener('click', handleClickFav);
"use strict";
let favLocal = [];

function setLocalSt(){
    localStorage.setItem("favChar", JSON.stringify(favCharacters));
    favLocal = JSON.parse(localStorage.getItem("favChar"));
}

// function paintLocalSt(){
//     if (favLocal !==[]) {
//         favSection.classList.remove("hidden");
//         container.classList.add("main");
//         paintCharacters(favLocal, favList);
//         console.log(favLocal);
//  } 
// }
"use strict";
let characters = [];

function paintCharacters(charactersData, list, className) {
  for (let i = 0; i < charactersData.length; i++) {
    const liElement = document.createElement("li");
    const articleElement = document.createElement("article");
    articleElement.classList.add(className);
    articleElement.setAttribute("id", `${charactersData[i].char_id}`);
   
    const imgElement = document.createElement("img");
    articleElement.appendChild(imgElement);
    const titleElement = document.createElement("h2");
    articleElement.appendChild(titleElement);
    const textElement = document.createElement("p");
    articleElement.appendChild(textElement);

    liElement.appendChild(articleElement);
    list.appendChild(liElement);

    const nameText = document.createTextNode(`${charactersData[i].name}`);
    titleElement.appendChild(nameText);

    imgElement.src = `${charactersData[i].img}`;
    imgElement.alt = `Photo of ${charactersData[i].name}`;
    imgElement.style.height = "150px";
    imgElement.style.width = "110px";

    const statusText = document.createTextNode(`${charactersData[i].status}`);
    textElement.appendChild(statusText);
  }
}

function getCharacter() {
  fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      characters = data;
      paintCharacters(data, allList, "characters__back");
    });
}

getCharacter();
// paintLocalSt();

//# sourceMappingURL=main.js.map
