function createReset(){
    const resetBtn = document.createElement("button");
    const resetText = document.createTextNode("Delete All");
    resetBtn.appendChild(resetText);
    resetBtn.classList.add("resetBtn");
    favSection.appendChild(resetBtn);
    resetBtn.addEventListener('click', handleClickReset);
}




function handleClickReset(){
    favCharacters = [];
    favList.innerHTML = "";
    favSection.classList.add("hidden");
    container.classList.remove("main");
    removeLocalSt();

    for (const eachLi of allList.children) {
        eachLi.firstChild.classList.remove("allFavs");
}
}