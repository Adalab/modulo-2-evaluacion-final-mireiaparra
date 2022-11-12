"use strict";
let favLocal = [];

function setLocalSt(){
    localStorage.setItem("favChar", JSON.stringify(favCharacters));
    favLocal = JSON.parse(localStorage.getItem("favChar"));
}

// function paintLocalSt(){
//     if (favLocal !==[]) {
//         favSection.classList.remove("hidden");
//         container.classList.add("main");
//         paintCharacters(favLocal, favList);
//         console.log(favLocal);
//  } 
// }