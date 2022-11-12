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