"use strict";
const allList = document.querySelector(".js-allCharactersList");
const favList = document.querySelector(".js-favCharactersList")
const searchBtn = document.querySelector(".js-searchBtn");
const searchInput = document.querySelector(".js-searchInput");

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
    favElement.classList.toggle("fav");

    const findFav = characters.find((eachFav) => eachFav.char_id == parseInt(favElement.id));
   
    favCharacters.push(findFav);
    console.log(favCharacters);
    favList.innerHTML = '';
    paintCharacters(favCharacters, favList);
}
   

function handleClickFav(ev) {
    ev.preventDefault;
   paintFav(ev);
}

allList.addEventListener('click', handleClickFav);
"use strict";
let characters = [];

function paintCharacters(charactersData, list) {
  for (let i = 0; i < charactersData.length; i++) {
    const liElement = document.createElement("li");
    const articleElement = document.createElement("article");
    articleElement.classList.add("characters__back");
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
      paintCharacters(data, allList);
    });
}

getCharacter();

//# sourceMappingURL=main.js.map
