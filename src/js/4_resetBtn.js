function reset(){
    const resetBtn = document.createElement("button");
    const resetText = document.createTextNode("Delete All");
    resetBtn.appendChild(resetText);
    resetBtn.classList.add("resetBtn");
    favList.appendChild(resetBtn);
    favList.innerHTML = "";
    favList.classList.add("hidden");
    container.classList.remove("main");
}
reset();