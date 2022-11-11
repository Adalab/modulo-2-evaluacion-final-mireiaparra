"use strict"


// function createChElement() {
//     for (let i=0; i<6; i++) {
//         const liElement = document.createElement("li");
       
//         const imgElement = document.createElement("img");
//         liElement.appendChild(imgElement);
//         const titleElement = document.createElement("h2");
//         liElement.appendChild(titleElement);
//         const textElement = document.createElement("p");
//         liElement.appendChild(textElement);

//         allList.appendChild(liElement);

     
//     }
//     return allList;
// }

// createChElement();

function getCh(){
    fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
        for (let i=0; i<8; i++) {
            const liElement = document.createElement("li");
       
            const imgElement = document.createElement("img");
            liElement.appendChild(imgElement);
            const titleElement = document.createElement("h2");
            liElement.appendChild(titleElement);
            const textElement = document.createElement("p");
            liElement.appendChild(textElement);
    
            allList.appendChild(liElement);

           const nameText = document.createTextNode(`${data[i].name}`);
           titleElement.appendChild(nameText);

           imgElement.src = `${data[i].img}`;
           imgElement.style.height = "150px";
           imgElement.style.width = "110px";

           const statusText = document.createTextNode(`${data[i].status}`);
           textElement.appendChild(statusText);
        }
       
    });
}

getCh();