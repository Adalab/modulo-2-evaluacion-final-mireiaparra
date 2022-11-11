const allList = document.querySelector(".js-allChList");
"use strict"

function createChElement() {
    for (let i=0; i<6; i++) {
        const liElement = document.createElement("li");
       
        const imgElement = document.createElement("img");
        liElement.appendChild(imgElement);
        const titleElement = document.createElement("h2");
        liElement.appendChild(titleElement);
        const textElement = document.createElement("p");
        liElement.appendChild(textElement);

        allList.appendChild(liElement);
    }
}

createChElement();

function getCh(){
    fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {

    });
}
//# sourceMappingURL=main.js.map
