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
    } else {
        favCharacters.splice(isFavIndex, 1);
    }
    setLocalSt();
    favList.innerHTML = '';

    if (favCharacters === []) {
        favSection.classList.add("hidden");
    } else {
        favSection.classList.remove("hidden");
        paintCharacters(favCharacters, favList, "fav");
        styleFav();
        reset();
    
    const removeFavBtnNode = document.querySelectorAll(".removeFav");
    const removeFavBtns = Array.prototype.slice.call(removeFavBtnNode);
    console.log(removeFavBtns);

    for (let i = 0; i < removeFavBtns.length; i++) {
        removeFavBtns.addEventListener('click', handleClickRemove);
    }
    }

}


function styleFav(){
    container.classList.add("main");
    const favArticles = document.querySelectorAll(".fav");
    // console.log(favArticles);
    for (const favArticle of favArticles) {
        const removeFavBtn = document.createElement("p");
        removeFavBtn.classList.add("removeFav");
        const removeFavText = document.createTextNode("X");
        removeFavBtn.appendChild(removeFavText);
        favArticle.appendChild(removeFavBtn);
    }
}

function handleClickFav(ev) {
    ev.preventDefault;
   paintFav(ev);
}

allList.addEventListener('click', handleClickFav);



function handleClickRemove(ev){
 ev.preventDefault;
    console.log("he hecho click");
//  const isFavIndex = favCharacters.findIndex((eachFav) => eachFav.char_id == parseInt( ev.target.parentElement.id));
//  favCharacters.splice(isFavIndex, 1);
}
