"use strict";
let favCharacters = [];

function paintFav(ev){
    let favElement =  ev.target.parentElement;
    favElement.classList.toggle("fav");

    const findFav = characters.find((eachFav) => eachFav.char_id == parseInt(favElement.id));
   
    favCharacters.push(findFav);
    console.log(favCharacters);
    favList.innerHTML = '';
    paintCharacters(favCharacters, favList);
}
   

function handleClickFav(ev) {
    ev.preventDefault;
   paintFav(ev);
}

allList.addEventListener('click', handleClickFav);