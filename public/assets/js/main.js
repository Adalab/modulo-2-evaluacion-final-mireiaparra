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

      // Encontrar el objeto de search que tenga el mismo char_id que mi elemento de favsList
      // TODO: repasar == por ===

    // const findSearch = characters.find((eachChar) => eachChar.char_id == parseInt(.id));
    // console.log(findSearch);


    allList.innerHTML = "";
    paintCharacters(filteredCharacters, allList, "characters__back");
    // filteredChildren es un HTMLCollection de li(s)
    // Quiero encontrar los elemetos de filteredCharacters(array de objetos character) que estan en favCharacters(array de objetos character)

    const filteredChildren = allList.children;

    // const favListLi = favList.childNodes;
    // const favListLiArr = Array.prototype.slice.call(favListLi);
    const eachFav = document.querySelector(".fav");
    // let findSearch = [];
    for (let i = 0; i < filteredChildren.length; i++) {
        filteredChildren[i].addEventListener('click', handleClickFav);

        //Article de cada elemento de la lista de filtrados
        const eachFiltered = filteredChildren[i].firstChild;
        console.log(eachFiltered);

        if (favCharacters !== null && favCharacters !== []) {
        //Esto da el array de objetos de la lista de filtered que tenga un id igual a los que están en favoritos
       const findSearchIndex = favCharacters.findIndex((eachChar) => eachChar.char_id == parseInt(eachFiltered.id));
            console.log(findSearchIndex);
  

          //Comprobar si el objeto estaba en el Array
    if (findSearchIndex !== -1) {
        eachFiltered.classList.add("allFavs");
     
    } else {
        eachFiltered.classList.add("characters__back");
    }
    }
    }

}

searchBtn.addEventListener('click', handleClickSearch);
"use strict";
let favCharacters = [];

function paintFav(ev){
    let favElement =  ev.target.parentElement;
    favElement.classList.add("allFavs");

    //Encontrar el objeto según el click que haga
    const findFav = characters.find((eachChar) => eachChar.char_id == parseInt(favElement.id));

    //Encontrar la posición del objeto en el que he hecho click en el array
    const isFavIndex = favCharacters.findIndex((eachFav) => eachFav.char_id == parseInt(favElement.id));

    //Comprobar si el objeto NO estaba en el array y añadirlo o quitarlo si SÍ estaba
    if (isFavIndex === -1) {
        favCharacters.push(findFav);
    } else {
        favCharacters.splice(isFavIndex, 1);
        favElement.classList.remove("allFavs");
    }

  updateFavList();
}

function updateFavList(){
    favList.innerHTML = '';
    console.log(favCharacters, "Estoy aquí");
    if (favCharacters.length === 0 || favCharacters === null) {
        favSection.classList.add("hidden");
        container.classList.remove("main");
        removeLocalSt();
        console.log("Esto es el if");
    } else {
        favSection.classList.remove("hidden");
        paintCharacters(favCharacters, favList, "favsCharacters__list--article");
        console.log(favCharacters.length);
        styleFav();
        setLocalSt();
        console.log("Esto es el else");
    }
}

function styleFav(){
    container.classList.add("main");
    const favArticles = document.querySelectorAll(".favsCharacters__list--article");
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
    const isFavIndex = favCharacters.findIndex((eachFav) => eachFav.char_id == parseInt(ev.target.parentElement.id));
    favCharacters.splice(isFavIndex, 1);

    const allLi = allList.children;
    const allLiArr = Array.prototype.slice.call(allLi);

    const oldFavCharacterLi = allLiArr.find((eachLi) => eachLi.firstChild.id == parseInt(ev.target.parentElement.id));
    oldFavCharacterLi.firstChild.classList.remove("allFavs");

    updateFavList();
   }
   

function handleClickFav(ev) {
    ev.preventDefault;
   paintFav(ev);
}


createReset(); 






"use strict";

let favsLocal = JSON.parse(localStorage.getItem("favChars"));

function setLocalSt(){
   localStorage.setItem("favChars", JSON.stringify(favCharacters));
}
function removeLocalSt(){
    localStorage.removeItem("favChars");
}

function paintLocalSt(){
    if (favsLocal !== null && favsLocal !== []) {
        favSection.classList.remove("hidden");
        favCharacters = favsLocal;
        paintCharacters(favsLocal, favList, "favsCharacters__list--article");
        styleFav();  


    const allCharactersLi = allList.children;
    // const allLiArr = Array.prototype.slice.call(allLi);
   
    for (let i = 0; i < allCharactersLi.length; i++) {
        const eachArticle = allCharactersLi[i].firstChild;
        console.log(eachArticle);
            //Esto da el array de objetos de la lista de filtered que tenga un id igual a los que están en favoritos
           const findArticleIndex = favCharacters.findIndex((eachChar) => eachChar.char_id == parseInt(eachArticle.id));
    
      
              //Comprobar si el objeto estaba en el Array
        if (findArticleIndex !== -1) {
            eachArticle.classList.add("allFavs");
         
        }
 } 

}}

function createReset(){
    const resetBtn = document.createElement("button");
    const resetText = document.createTextNode("Delete All");
    resetBtn.appendChild(resetText);
    resetBtn.classList.add("resetBtn");
    favSection.appendChild(resetBtn);
    resetBtn.addEventListener('click', handleClickReset);
}




function handleClickReset(){
    favCharacters = [];
    favList.innerHTML = "";
    favSection.classList.add("hidden");
    container.classList.remove("main");
    removeLocalSt();

    for (const eachLi of allList.children) {
        eachLi.firstChild.classList.remove("allFavs");
}
}
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
      paintCharacters(data, allList, "allCharacters__list--article");
      const allListChildren = allList.children;
      for (let i = 0; i < allListChildren.length; i++) {
      allListChildren[i].addEventListener('click', handleClickFav);
}
paintLocalSt();
    });

}


// Al cargar la página
getCharacters();



//# sourceMappingURL=main.js.map
