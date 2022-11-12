"use strict";
let favsLocal = JSON.parse(localStorage.getItem("favChars"));

function setLocalSt(){
   localStorage.setItem("favChars", JSON.stringify(favCharacters));
}

function paintLocalSt(){
    if (favsLocal !== null) {
        favSection.classList.remove("hidden");
        container.classList.add("main");
        favCharacters = favsLocal;
        paintCharacters(favsLocal, favList, "fav");     
 } 
}

