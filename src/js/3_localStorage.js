"use strict";

let favsLocal = JSON.parse(localStorage.getItem("favChars"));

function setLocalSt() {
  localStorage.setItem("favChars", JSON.stringify(favCharacters));
}
function removeLocalSt() {
  localStorage.removeItem("favChars");
}

function paintLocalSt() {
  if (favsLocal !== null && favsLocal !== []) {
    favSection.classList.remove("hidden");
    favSection.classList.add("favsCharacters");
    favCharacters = favsLocal;
    paintCharacters(favsLocal, favList, "favsCharacters__list--articleBtn");
    styleFav();

    const allCharactersLi = allList.children;
    // const allLiArr = Array.prototype.slice.call(allLi);

    for (let i = 0; i < allCharactersLi.length; i++) {
      const eachArticle = allCharactersLi[i].firstChild;
      console.log(eachArticle);
      //Esto da el array de objetos de la lista de filtered que tenga un id igual a los que están en favoritos
      const findArticleIndex = favCharacters.findIndex(
        (eachChar) => eachChar.char_id == parseInt(eachArticle.id)
      );

      //Comprobar si el objeto estaba en el Array
      if (findArticleIndex !== -1) {
        eachArticle.classList.add("favsCharacters__list--article");
      }
    }
  }
}
