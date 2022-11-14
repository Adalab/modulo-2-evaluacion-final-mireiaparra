"use strict";
function handleClickSearch(ev) {
    ev.preventDefault;

    const searchCharactersName = characters.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    const searchCharactersStatus = characters.filter((eachCharacter) => eachCharacter.status.toLowerCase().includes(searchInput.value.toLowerCase()));

    let filteredCharacters = searchCharactersName.concat(searchCharactersStatus);
    console.log(filteredCharacters);

    allList.innerHTML = "";
    paintCharacters(filteredCharacters, allList, "characters__back");
    const filteredChildren = allList.children;
    for (let i = 0; i < filteredChildren.length; i++) {
        filteredChildren[i].addEventListener('click', handleClickFav);
    }
}

searchBtn.addEventListener('click', handleClickSearch);