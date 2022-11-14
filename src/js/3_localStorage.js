"use strict";
let favsLocal = JSON.parse(localStorage.getItem("favChars"));

function setLocalSt(){
   localStorage.setItem("favChars", JSON.stringify(favCharacters));
}

function paintLocalSt(){
    if (favsLocal !== null) {
        favSection.classList.remove("hidden");
        favCharacters = favsLocal;
        paintCharacters(favsLocal, favList, "fav");
        styleFav();     
          // reset();
        const removeFavBtnNode = document.querySelectorAll(".removeFav");
        const removeFavBtns = Array.prototype.slice.call(removeFavBtnNode);
        console.log(removeFavBtns);
    
        for (let i = 0; i < removeFavBtns.length; i++) {
            removeFavBtns.addEventListener('click', handleClickRemove);
        }
 } 
}

