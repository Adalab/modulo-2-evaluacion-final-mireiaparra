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

    // Remove favorite characters list before painting
    favList.innerHTML = '';

    if (favCharacters === [] || favCharacters === null) {
        favSection.classList.add("hidden");
    } else {
        console.log(favCharacters);
        favSection.classList.remove("hidden");
        paintCharacters(favCharacters, favList, "fav");
        styleFav();
        // reset();
    

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

    // Meter todo esto en una función diferente. updateFavList();
    favList.innerHTML = '';

    if (favCharacters === [] || favCharacters === null) {
        favSection.classList.add("hidden");
    } else {
        paintCharacters(favCharacters, favList, "fav");
        styleFav();
    }
   }
   

function handleClickFav(ev) {
    ev.preventDefault;
   paintFav(ev);
}

allList.addEventListener('click', handleClickFav);



