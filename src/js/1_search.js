"use strict";
function handleClickSearch(ev) {
    ev.preventDefault;

    const searchCharactersName = characters.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    const searchCharactersStatus = characters.filter((eachCharacter) => eachCharacter.status.toLowerCase().includes(searchInput.value.toLowerCase()));

    let filteredCharacters = searchCharactersName.concat(searchCharactersStatus);

      // Encontrar el objeto de search que tenga el mismo char_id que mi elemento de favsList
      // TODO: repasar == por ===

    // const findSearch = characters.find((eachChar) => eachChar.char_id == parseInt(.id));
    // console.log(findSearch);


    allList.innerHTML = "";
    paintCharacters(filteredCharacters, allList, "characters__back");
    // filteredChildren es un HTMLCollection de li(s)
    // Quiero encontrar los elemetos de filteredCharacters(array de objetos character) que estan en favCharacters(array de objetos character)

    const filteredChildren = allList.children;

    // const favListLi = favList.childNodes;
    // const favListLiArr = Array.prototype.slice.call(favListLi);
    const eachFav = document.querySelector(".fav");
    let findSearch = [];
    for (let i = 0; i < filteredChildren.length; i++) {
        filteredChildren[i].addEventListener('click', handleClickFav);

        //Article de cada elemento de la lista de filtrados
        const eachFiltered = filteredChildren[i].firstChild;
        // console.log(eachFiltered.id);

        if (eachFav !== null) {
        //Esto da el array de objetos de la lista de filtered que tenga un id igual a los que están en favoritos
       const findSearchArr = filteredCharacters.filter((eachChar) => eachChar.char_id == parseInt(eachFav.id));
       const findSearchIndex = filteredCharacters.indexOf((eachChar) => eachChar.char_id == parseInt(eachFav.id));

          //Comprobar si el objeto NO estaba en el array y añadirlo o quitarlo si SÍ estaba
    if (findSearchIndex === -1) {
        findSearch.push(findSearchArr);
        console.log(findSearch);
    } else {
        findSearch.splice(findSearchIndex, 1);
    }
    }

    // paintCharacters(filteredCharacters, allList, "characters__back");
        // console.log(findSearchArr);
        // findSearch.push(findSearchArr);

        // console.log(findSearchArr);
    }
    // console.log(findSearch);
    // paintCharacters(findSearch, allList, "fav");
}

searchBtn.addEventListener('click', handleClickSearch);