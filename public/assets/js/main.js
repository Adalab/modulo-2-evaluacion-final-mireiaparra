"use strict";
const allList = document.querySelector(".js-allCharactersList");
const favList = document.querySelector(".js-favCharactersList")
const favSection = document.querySelector(".js-favSection");
const searchBtn = document.querySelector(".js-searchBtn");
const searchInput = document.querySelector(".js-searchInput");
const container = document.querySelector(".js-main");



"use strict";
function handleClickSearch(ev) {
    ev.preventDefault;

    const searchCharactersName = characters.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    const searchCharactersStatus = characters.filter((eachCharacter) => eachCharacter.status.toLowerCase().includes(searchInput.value.toLowerCase()));

    let filteredCharacters = searchCharactersName.concat(searchCharactersStatus);
    console.log(filteredCharacters);

    allList.innerHTML = "";
    paintCharacters(filteredCharacters, allList, "characters__back");
    const filteredChildren = allList.children;
    for (let i = 0; i < filteredChildren.length; i++) {
        filteredChildren[i].addEventListener('click', handleClickFav);
    }
}

searchBtn.addEventListener('click', handleClickSearch);
"use strict";
let favCharacters = [];

function paintFav(ev){
    let favElement =  ev.target.parentElement;
    // favElement.classList.toggle("fav");

    //Encontrar el objeto según el click que haga
    const findFav = characters.find((eachChar) => eachChar.char_id == parseInt(favElement.id));

    //Encontrar la posición del objeto en el que he hecho click en el array
    const isFavIndex = favCharacters.findIndex((eachFav) => eachFav.char_id == parseInt(favElement.id));

    //Comprobar si el objeto NO estaba en el array y añadirlo o quitarlo si SÍ estaba
    if (isFavIndex === -1) {
        favCharacters.push(findFav);
        console.log(isFavIndex);
        console.log(findFav);
    } else {
        favCharacters.splice(isFavIndex, 1);
    }
    // setLocalSt();

  updateFavList();

}

function updateFavList(){
    favList.innerHTML = '';
    console.log(favCharacters, "Estoy aquí");
    if (favCharacters.length === 0 || favCharacters === null) {
        favSection.classList.add("hidden");
        container.classList.remove("main");
        console.log("Esto es el if");
    } else {
        favSection.classList.remove("hidden");
        paintCharacters(favCharacters, favList, "fav");
        styleFav();
        console.log("Esto es el else");
    }
}

function styleFav(){
    container.classList.add("main");
    const favArticles = document.querySelectorAll(".fav");
    // console.log(favArticles);
    for (const favArticle of favArticles) {
        const removeFavBtn = document.createElement("p");
        removeFavBtn.classList.add("removeFav");
        removeFavBtn.addEventListener('click', handleClickRemove);
        const removeFavText = document.createTextNode("X");
        removeFavBtn.appendChild(removeFavText);
        favArticle.appendChild(removeFavBtn);
}
}

function handleClickRemove(ev){
    ev.preventDefault;
    console.log("he hecho click");
    const isFavIndex = favCharacters.findIndex((eachFav) => eachFav.char_id == parseInt(ev.target.parentElement.id));
    favCharacters.splice(isFavIndex, 1);
    updateFavList();
   }
   

function handleClickFav(ev) {
    ev.preventDefault;
   paintFav(ev);
}







// "use strict";

// // Cómo lo va a coger cuando está vacío?
// let favsLocal = JSON.parse(localStorage.getItem("favChars"));

// function setLocalSt(){
//    localStorage.setItem("favChars", JSON.stringify(favCharacters));
// }

// function paintLocalSt(){
//     if (favsLocal !== null ||  favsLocal!== []) {
//         favSection.classList.remove("hidden");
//         favCharacters = favsLocal;
//         paintCharacters(favsLocal, favList, "fav");
//         styleFav();     
//           // reset();
//         const removeFavBtnNode = document.querySelectorAll(".removeFav");
//         const removeFavBtns = Array.prototype.slice.call(removeFavBtnNode);
//         console.log(removeFavBtns);
    
//         for (let i = 0; i < removeFavBtns.length; i++) {
//             removeFavBtns.addEventListener('click', handleClickRemove);
//         }
//  } 
// }


function reset(){
    const resetBtn = document.createElement("button");
    const resetText = document.createTextNode("Delete All");
    resetBtn.appendChild(resetText);
    resetBtn.classList.add("resetBtn");
    favList.appendChild(resetBtn);
    favList.innerHTML = "";
    favList.classList.add("hidden");
    container.classList.remove("main");
}
// reset();
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

function getCharacters() {
  fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      characters = data;
      paintCharacters(data, allList, "characters__back");
      const allListChildren = allList.children;
      for (let i = 0; i < allListChildren.length; i++) {
      allListChildren[i].addEventListener('click', handleClickFav);
}
    });
}


// Al cargar la página
getCharacters();
// paintLocalSt();

//# sourceMappingURL=main.js.map
