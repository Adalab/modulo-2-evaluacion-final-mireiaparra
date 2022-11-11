"use strict";
function handleClick(ev) {
    ev.preventDefault;

    const searchCharacters = characters.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    allList.innerHTML = "";
    paintCharacters(searchCharacters);
    }


searchBtn.addEventListener('click', handleClick);