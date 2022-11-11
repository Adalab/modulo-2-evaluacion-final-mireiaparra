"use strict";
let characters = [];

function paintCharacters(charactersData) {
  for (let i = 0; i < charactersData.length; i++) {
    const articleElement = document.createElement("article");
    articleElement.classList.add("characters__back");
    const liElement = document.createElement("li");

    const imgElement = document.createElement("img");
    liElement.appendChild(imgElement);
    const titleElement = document.createElement("h2");
    liElement.appendChild(titleElement);
    const textElement = document.createElement("p");
    liElement.appendChild(textElement);

    articleElement.appendChild(liElement);
    allList.appendChild(articleElement);

    const nameText = document.createTextNode(`${charactersData[i].name}`);
    titleElement.appendChild(nameText);

    imgElement.src = `${charactersData[i].img}`;
    imgElement.alt = `Photo of ${charactersData[i].name}`;
    imgElement.style.height = "150px";
    imgElement.style.width = "110px";

    const statusText = document.createTextNode(`${charactersData[i].status}`);
    textElement.appendChild(statusText);
  }
}

function getCharacter() {
  fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      characters = data;
      paintCharacters(data);
    });
}

getCharacter();
