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
        paintCharacters(favsLocal, favList, "fav");
        styleFav();     
        createReset();
        }
 } 


