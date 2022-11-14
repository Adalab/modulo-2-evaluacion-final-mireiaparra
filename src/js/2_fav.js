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

//Mejor que sea cada li que la lista entera. Quizá en favElement?
allList.addEventListener('click', handleClickFav);



